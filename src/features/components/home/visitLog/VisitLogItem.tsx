import { VisitLogItem as VisitLogType } from '@/types/types';
import { visitLog as visitLogSrc } from '@/data/data';
import Image from 'next/image';

export function VisitLogItem({ visitLog }: { visitLog: VisitLogType }) {
  return (
    <div className="h-[87px] flex gap-2">
      <div className="h-[87px] w-[92px] relative">
        <Image src={visitLogSrc[visitLog.thumbnail].active} alt="thumbnail" layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col w-[calc(100%-100px)]">
        <p className="text-sm text-primary-main font-bold mb-[9px]">{visitLog.name}</p>
        <p className="text-md w-full ellipsis-2 mb-[14px] leading-5">{visitLog.message}</p>
        <p className="text-sm text-[#9B9B9B]">{visitLog.date}</p>
      </div>
    </div>
  );
}
