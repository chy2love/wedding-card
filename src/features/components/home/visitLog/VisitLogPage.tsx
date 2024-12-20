'use client';
import { VisitLogItem } from '@/types/types';
import VisitLogContent from './VisitLogContent';
import { useState, useEffect } from 'react';
import PopWrap from '../../ui/PopWrap';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import PostVisitLog from './PostVisitLog';
export default function VisitLogPage() {
  const [visitLogs, setVisitLogs] = useState<VisitLogItem[]>([]);
  const [postVisitLogPopState, setPostVisitLogPopState] = useState<boolean>(false);
  useEffect(() => {
    getVisitLogs();
    return () => {};
  }, []);
  useEffect(() => {
    console.log('visitLog => ', visitLogs);
    return () => {};
  }, [visitLogs]);
  const getVisitLogs = async () => {
    setPostVisitLogPopState(false);
    const response = await fetch('/api/dynamic/visit-log', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setVisitLogs(data.data);
    }
  };
  return (
    <div className="overflow-hidden">
      <div className="fixed left-[50%] translate-x-[-50%] top-0 bg-white h-[51px] max-w-[440px] w-full flex justify-center items-center gap-[11px] px-[19px] border-b border-[#666667] z-[999]">
        축하 인사를 담은 방명록
        <div
          onClick={() => setPostVisitLogPopState(true)}
          className="absolute right-5 top-[50%] translate-y-[-50%] bg-[url('./assets/post-visit-log.svg')] w-5 h-5 cursor-pointer"
        ></div>
      </div>
      <div className="pt-[51px] ">
        <VisitLogContent visitLogs={visitLogs} afterDeleteCallback={getVisitLogs} />
      </div>
      {postVisitLogPopState && (
        <PostVisitLog afterPostCallback={getVisitLogs} close={() => setPostVisitLogPopState(false)} />
      )}
    </div>
  );
}
