import Image from 'next/image';

export function PictureSlider() {
  return (
    <div className="w-full h-[258px]">
      <Image
        src={'http://bbosongbbosong.com/wedding/toon/toon1-thumb.jpg'}
        alt=""
        className="w-full h-full"
        width={0}
        height={0}
      />
    </div>
  );
}
