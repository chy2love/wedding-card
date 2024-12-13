'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
export function Navigator() {
  const path = usePathname();
  useEffect(() => {
    console.log(' => ', path);
    console.log(' => ', path === '/dynamic/main');
    return () => {};
  }, []);
  return (
    <div
      className="fixed bottom-0 w-full left-[50%] translate-x-[-50%] max-w-[440px] h-[82px] py-[11px] px-5 flex justify-between
     bg-white border-t border-[#D9D9D9] z-[999]"
    >
      <Link href={'/dynamic/main'} className={`flex flex-col items-center gap-[6px] w-[53px] `}>
        <div
          className={`w-6 h-6  ${path === '/dynamic/main' ? "bg-[url('./assets/navigator/home-selected.svg')]" : "bg-[url('./assets/navigator/home.svg')]"}`}
        ></div>
        <p className="text-[#9B9B9B] text-md">홈</p>
      </Link>
      <Link href={'/dynamic/main/gallery'} className={`flex flex-col items-center gap-[6px] w-[53px]`}>
        <div
          className={`w-6 h-6 ${path === '/dynamic/main/gallery' ? "bg-[url('./assets/navigator/gallery-selected.svg')]" : " bg-[url('./assets/navigator/gallery.svg')] "}`}
        ></div>
        <p className="text-[#9B9B9B] text-md">갤러리</p>
      </Link>
      <Link href={'/dynamic/main/webtoon'} className={`flex flex-col items-center gap-[6px] w-[53px]`}>
        <div
          className={`w-6 h-6  ${path === '/dynamic/main/webtoon' ? "bg-[url('./assets/navigator/webtoon-selected.svg')]" : " bg-[url('./assets/navigator/webtoon.svg')]"}`}
        ></div>
        <p className="text-[#9B9B9B] text-md">웹툰</p>
      </Link>
      <Link href={'/dynamic/main/how-to-come'} className={`flex flex-col items-center gap-[6px] w-[53px] `}>
        <div
          className={`w-6 h-6 ${path === '/dynamic/main/how-to-come' ? "bg-[url('./assets/navigator/how-to-come-selected.svg')]" : " bg-[url('./assets/navigator/how-to-come.svg')]"}`}
        ></div>
        <p className="text-[#9B9B9B] text-md">오시는길</p>
      </Link>
      <Link href={'/dynamic/main/visit-log'} className={`flex flex-col items-center gap-[6px] w-[53px] `}>
        <div
          className={`w-6 h-6 ${path === '/dynamic/main/visit-log' ? "bg-[url('./assets/navigator/visit-log-selected.svg')]" : " bg-[url('./assets/navigator/visit-log.svg')]"}`}
        ></div>
        <p className="text-[#9B9B9B] text-md">방명록</p>
      </Link>
    </div>
  );
}
