import { VisitLogItem } from './VisitLogItem';

export function VisitLogList() {
  return (
    <div className="pt-5 h-[341px] flex flex-col items-center gap-5">
      <div className="flex flex-col gap-[10px]">
        <VisitLogItem />
        <VisitLogItem />
        <VisitLogItem />
      </div>
      <div className="w-[122px] h-5 bg-red-300">{/* 페이지네이션 */}</div>
    </div>
  );
}
