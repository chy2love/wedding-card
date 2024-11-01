import { VisitLogList } from './VisitLogList';

export function VisitLog() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className="py-1 px-2 text-white text-sm bg-primary-main rounded-[6px] mr-[6px]">방명록</p>
          <p className="text-md">
            <span className="font-bold">축하 인사</span> 남겨주시면 감사하겠습니다!
          </p>
        </div>
        <button className="bg-edit w-[18px] h-[18px]"></button>
      </div>
      <VisitLogList />
    </div>
  );
}
