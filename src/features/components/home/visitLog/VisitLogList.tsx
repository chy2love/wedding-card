'use client';
import { VisitLogItem as VisitLogType } from '@/types/types';
import { VisitLogItem } from './VisitLogItem';
import { useEffect, useState } from 'react';
export function VisitLogList({ visitLogs }: { visitLogs: VisitLogType[] }) {
  const [pagedList, setPagedList] = useState<Map<number, VisitLogType[]>>(new Map());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const chunkArray = (array: VisitLogType[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  useEffect(() => {
    const chunked = chunkArray(visitLogs, 3);
    const pagedMap = new Map<number, VisitLogType[]>();
    chunked.forEach((chunk, index) => {
      pagedMap.set(index + 1, chunk);
    });
    setPagedList(pagedMap);
  }, [visitLogs]);
  return (
    <div className="pt-5 h-[341px] flex flex-col items-center gap-5">
      <div className="flex flex-col gap-[10px] w-full">
        {pagedList.get(currentPage)?.map((visitLog) => <VisitLogItem key={visitLog.id} visitLog={visitLog} />)}
      </div>
      <div className="w-[122px] h-5 bg-red-300">{/* 페이지네이션 */}</div>
    </div>
  );
}
