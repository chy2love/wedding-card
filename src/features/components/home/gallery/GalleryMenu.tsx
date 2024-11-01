export function GalleryMenu() {
  return (
    <div className="w-full h-[52px] px-[25px] pt-5 pb-[10px] flex gap-5">
      <button className={`pb-[6px] text-md font-bold border-b-2 border-solid border-black`}>갤러리</button>
      <button className={`pb-[6px] text-md`}>신랑 최하영</button>
      <button className={`pb-[6px] text-md`}>신부 윤소희</button>
      <button className={`pb-[6px] text-md`}>연인시절</button>
    </div>
  );
}
