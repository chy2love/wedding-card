import Link from 'next/link';

export default function GalleryMore() {
  return (
    <div>
      <Link
        href={'/dynamic/main/gallery'}
        className="w-full h-[54px] flex items-center justify-center gap-1 border-t border-[#EBEBEB]"
      >
        <span className="text-md">더</span>
        <span className="text-md">많은</span>
        <span className="text-md font-[600] text-text-pink">사진</span>
        <span className="text-md">보러가기</span>
        <span className="text-md">{'>'}</span>
      </Link>
    </div>
  );
}
