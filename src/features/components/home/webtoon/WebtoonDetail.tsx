'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import { webtoonList } from './WebtoonPage';
import { webtoon } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
export default function WebtoonDetail() {
  const webtoonId = useParams().id;
  const [webtoonTitle, setWebtoonTitle] = useState<string>('');
  const [webtoonLength, setWebtoonLength] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    setWebtoonTitle(webtoonList.find((webtoon) => webtoon.id === +webtoonId)!.title);
    setWebtoonLength((webtoon as any).list[`webtoon_${webtoonId}`].length);
    return () => {};
  }, []);
  const goBack = () => {
    router.back();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false
  };
  return (
    <>
      <div className="fixed left-[50%] translate-x-[-50%] top-0 bg-white h-[51px] max-w-[440px] w-full flex items-center gap-[11px] px-[19px] border-b border-[#666667]">
        <div className="w-6 h-6 bg-left-arrow-24 cursor-pointer" onClick={goBack}></div>
        <p className="font-bold text-lg text-[#666667]">{webtoonTitle}</p>
      </div>
      <div className="w-full m-auto max-w-[440px] overflow-hidden pt-[51px]">
        <Slider {...settings} afterChange={(currentSlide) => setCurrentSlide(currentSlide)}>
          {(webtoon as any).list[`webtoon_${webtoonId}`].map((img: string, idx: number) => (
            <div className={`relative w-full]`} key={idx}>
              <Image src={img} alt="" width={0} height={0} sizes="100%" className="w-full h-auto object-contain" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="fixed px-5 left-[50%] translate-x-[-50%] bottom-0 bg-white h-[82px] max-w-[440px] w-full border-t border-[#666667]">
        <div className="w-full pl-[10px] h-[35px] flex items-center gap-5">
          <div className=" w-[calc(100%-40px)] h-1 bg-[#D9D9D9] relative">
            <div
              className={`absolute top-0 h-full left-0 after:content-[""] after:w-3 after:h-3 after:rounded-[100%] after:absolute after:right-0 after:translate-x-[50%] after:translate-y-[-35%] after:bg-text-pink bg-text-pink`}
              style={{ width: `calc(100%/${webtoonLength - 1}*${currentSlide})` }}
            ></div>
          </div>
          <p className="text-md flex">
            {currentSlide + 1}
            <span className="text-[#9A9A9D]">/{webtoonLength}</span>
          </p>
        </div>
        <div className="w-full flex justify-between items-center h-[47px]">
          <div className="flex gap-1 items-center">
            <div className='w-6 h-6 bg-[url("./assets/comment.svg")]'></div>
            <p>15</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <Link
              href={Number(webtoonId) === 1 ? '#' : `/dynamic/webtoon-detail/${Number(webtoonId) - 1}`}
              className='w-5 h-5 bg-[url("./assets/webtoon-left.svg")]'
            ></Link>
            <Link href={'/dynamic/main/webtoon'} className='w-5 h-5 bg-[url("./assets/webtoon-list.svg")]'></Link>
            <Link
              href={Number(webtoonId) === 5 ? '#' : `/dynamic/webtoon-detail/${Number(webtoonId) + 1}`}
              className='w-5 h-5 bg-[url("./assets/webtoon-right.svg")]'
            ></Link>
          </div>
        </div>
      </div>
    </>
  );
}
