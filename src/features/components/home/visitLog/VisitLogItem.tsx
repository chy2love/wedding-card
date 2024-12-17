import { thumbnailArr } from '@/data/data';
import { VisitLogItem as VisitLogType } from '@/types/types';
import Image from 'next/image';

export function VisitLogItem({ visitLog }: { visitLog: VisitLogType }) {
  return (
    <div className="h-[87px] flex gap-2">
      <Image
        src={thumbnailArr.find((i) => i.id === visitLog.thumbnail)!.thumbnailUrl}
        alt="thumbnail"
        width={92}
        height={87}
      />
      <div className="flex flex-col w-[calc(100%-100px)]">
        <p className="text-sm text-primary-main font-bold mb-[9px]">{visitLog.name}</p>
        <p className="text-md w-full ellipsis-2 mb-[14px] leading-5">{visitLog.message}</p>
        <p className="text-sm text-[#9B9B9B]">{visitLog.date}</p>
      </div>
    </div>
  );
}
