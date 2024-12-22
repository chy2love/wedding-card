'use client';
import { useState, useEffect } from 'react';
import { VisitLogList } from './VisitLogList';
import PostVisitLog from './PostVisitLog';
import { VisitLogItem } from '@/types/types';
import moment from 'moment';

export function VisitLog() {
  const [postPopState, setPostPopState] = useState<boolean>(false);
  const [visitLogs, setVisitLogs] = useState<VisitLogItem[]>([]);
  useEffect(() => {
    getVisitLogs();
    return () => {};
  }, []);
  const getVisitLogs = async () => {
    setPostPopState(false);
    const response = await fetch('/api/dynamic/visit-log', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 200) {
      const data = await response.json();
      const sortedData = data.data.sort((a: any, b: any) => {
        const momentA = moment(a.date);
        const momentB = moment(b.date);
        if (momentA.isBefore(momentB)) {
          return 1;
        } else {
          return -1;
        }
      });
      setVisitLogs(sortedData);
    }
  };
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="py-1 px-2 text-white text-sm bg-primary-main rounded-[6px] mr-[6px]">방명록</p>
          <p className="text-md">
            <span className="font-bold">축하 인사</span> 남겨주시면 감사하겠습니다!
          </p>
        </div>
        <button onClick={() => setPostPopState(true)} className="bg-edit w-[18px] h-[18px]"></button>
      </div>
      <VisitLogList visitLogs={visitLogs} />
      {postPopState && <PostVisitLog close={() => setPostPopState(false)} afterPostCallback={getVisitLogs} />}
    </div>
  );
}
