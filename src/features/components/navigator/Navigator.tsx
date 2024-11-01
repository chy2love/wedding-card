export function Navigator() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[82px] py-[11px] px-5 flex justify-between
     bg-white border-t border-[#D9D9D9] z-[999]"
    >
      <div className="flex flex-col items-center gap-[6px] w-[53px]">
        <div className="w-6 h-6 bg-red-500"></div>
        <p className="text-[#9B9B9B] text-md">홈</p>
      </div>
      <div className="flex flex-col items-center gap-[6px] w-[53px]">
        <div className="w-6 h-6 bg-red-500"></div>
        <p className="text-[#9B9B9B] text-md">갤러리</p>
      </div>
      <div className="flex flex-col items-center gap-[6px] w-[53px]">
        <div className="w-6 h-6 bg-red-500"></div>
        <p className="text-[#9B9B9B] text-md">웹툰</p>
      </div>
      <div className="flex flex-col items-center gap-[6px] w-[53px]">
        <div className="w-6 h-6 bg-red-500"></div>
        <p className="text-[#9B9B9B] text-md">오시는길</p>
      </div>
      <div className="flex flex-col items-center gap-[6px] w-[53px]">
        <div className="w-6 h-6 bg-red-500"></div>
        <p className="text-[#9B9B9B] text-md">방명록</p>
      </div>
    </div>
  );
}
