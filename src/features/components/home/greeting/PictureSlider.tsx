'use client';
import Image from 'next/image';

export function PictureSlider() {
  const url = 'https://bbosong.co.kr/img/toon/toon1/toon1-1.jpg';
  return (
    <div className="w-full h-[258px]">
      <Image src={url} alt="" className="w-full h-full" width={0} height={0} />
    </div>
  );
}
