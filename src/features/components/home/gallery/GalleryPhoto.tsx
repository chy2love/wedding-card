import Link from 'next/link';

const PHOTO_ARR = [
  { src: '', id: 1 },
  { src: '', id: 2 },
  { src: '', id: 3 },
  { src: '', id: 4 },
  { src: '', id: 5 },
  { src: '', id: 6 },
  { src: '', id: 7 },
  { src: '', id: 8 },
  { src: '', id: 9 }
];
export function GalleryPhoto() {
  return (
    <>
      <div className="pt-[10px] pb-5 px-5 h-[433px] flex flex-wrap gap-[10px]">
        {PHOTO_ARR.map((photo) => (
          <>
            <div key={photo.id} className=" w-[calc((100%-20px)/3)] h-[127px] bg-slate-300 rounded-[4px]"></div>
          </>
        ))}
      </div>
      <Link href={''} className="w-full h-[54px] flex items-center justify-center gap-1 border-t border-[#EBEBEB]">
        <span className="text-md">더</span>
        <span className="text-md">많은</span>
        <span className="text-md font-[600] text-text-pink">사진</span>
        <span className="text-md">보러가기</span>
        <span className="text-md">{'>'}</span>
      </Link>
    </>
  );
}
