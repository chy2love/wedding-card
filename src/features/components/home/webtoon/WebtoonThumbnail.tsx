import Link from 'next/link';

export function WebtoonThumbnail() {
  return (
    <div className="w-full h-[151px] p-5 flex flex-col gap-[10px]">
      <p className="text-[14px]">신랑신부의 연애 스토리가 보고싶다면?</p>
      <Link href={''}>
        <div className="w-full h-[87px] flex items-center gap-2">
          <div className="w-[91px] h-[87px] bg-slate-400 rounded-[4px]"></div>
          <div className="flex flex-col gap-1">
            <p className="text-[11px] text-[#FF1D89]">하영과 소희</p>
            <p className="pb-[6px] text-[14px]">우리의 만남</p>
            <p className="text-[#9B9B9B] text-[11px]">글/그림 윤소희</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
