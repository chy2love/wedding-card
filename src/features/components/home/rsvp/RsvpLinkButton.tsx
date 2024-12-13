import Image from 'next/image';
import Link from 'next/link';

export function RsvpLinkButton() {
  return (
    <div className="h-[61px] ">
      <Link className="px-5 h-full flex items-center justify-between" href="/dynamic/rsvp">
        <div className="flex gap-[6px] items-center">
          <p className="w-fit text-sm py-1 px-2 bg-[#FE9800] rounded-[6px] text-white">결혼식</p>
          <p className="text-md">
            <b className="font-bold">참석여부</b> 전달하기
          </p>
        </div>
        <div className="w-[14px] h-[14px] bg-right-arrow"></div>
      </Link>
    </div>
  );
}
