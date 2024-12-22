'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import { webtoonList } from './WebtoonPage';
import { webtoon } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { VisitLogItem } from '@/types/types';
import VisitLogContent from '../visitLog/VisitLogContent';
import PostVisitLog from '../visitLog/PostVisitLog';
import moment from 'moment';
export default function WebtoonDetail() {
  const webtoonId = useParams().id;
  const [webtoonTitle, setWebtoonTitle] = useState<string>('');
  const [webtoonLength, setWebtoonLength] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [visitLogToast, setVisitLogToast] = useState<boolean>(false);
  const [visitLogs, setVisitLogs] = useState<VisitLogItem[]>([]);
  const [postVisitLogPopState, setPostVisitLogPopState] = useState<boolean>(false);

  const router = useRouter();
  useEffect(() => {
    getVisitLogs();
    return () => {};
  }, []);
  const getVisitLogs = async () => {
    setPostVisitLogPopState(false);
    const response = await fetch('/api/dynamic/visit-log', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 200) {
      const data = await response.json();
      const sortedData = data.data.sort((a: any, b: any) => {
        const momentA = moment(a.date);
        const momentB = moment(b.date);
        if (momentA.isBefore(momentB)) {
          return 1;
        } else {
          return -1;
        }
      });
      setVisitLogs(sortedData);
    }
  };
  useEffect(() => {
    setWebtoonTitle(webtoonList.find((webtoon) => webtoon.id === +webtoonId)!.title);
    setWebtoonLength((webtoon as any).list[`webtoon_${webtoonId}`].length);
    return () => {};
  }, []);
  const goBack = () => {
    router.back();
  };
  return (
    <div className="bg-[#FFD9D9] min-h-screen">
      <div className="fixed left-[50%] translate-x-[-50%] top-0 bg-white h-[51px] max-w-[440px] w-full flex items-center gap-[11px] px-[19px] border-b border-[#666667]">
        <div className="w-6 h-6 bg-left-arrow-24 cursor-pointer" onClick={goBack}></div>
        <p className="font-bold text-lg text-[#666667]">{webtoonTitle}</p>
        <Link
          className='absolute top-[50%] translate-y-[-50%] right-5 w-6 h-6 bg-[url("./assets/navigator/home.svg")]'
          href={'/dynamic/main'}
        ></Link>
      </div>
      <div className="w-full m-auto max-w-[440px] overflow-hidden pt-[51px]">
        <Swiper
          scrollbar={{ draggable: true, dragSize: 3, el: '.scrollbar-el' }}
          modules={[Scrollbar]}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          slidesPerView={1}
        >
          {(webtoon as any).list[`webtoon_${webtoonId}`].map((img: string, idx: number) => (
            <SwiperSlide key={idx}>
              <div className={`relative w-full]`} key={idx}>
                <Image
                  src={img}
                  // loading="eager"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  className="w-full h-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="fixed px-5 left-[50%] translate-x-[-50%] bottom-0 bg-white h-[82px] max-w-[440px] w-full border-t border-[#666667] z-[150]">
        <div className="w-full pl-[10px] h-[35px] flex items-center gap-5">
          <div className="scrollbar-el w-[calc(100%-40px)] h-1 bg-[#D9D9D9] relative">
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
          <div className="flex gap-1 items-center cursor-pointer" onClick={() => setVisitLogToast(true)}>
            <div className='w-6 h-6 bg-[url("./assets/comment.svg")]'></div>
            <p>{visitLogs?.length}</p>
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
      <div
        className={`fixed ${visitLogToast ? 'top-0' : 'top-full'} duration-300 h-screen w-full flex items-center justify-center left-[50%] translate-x-[-50%] max-w-[440px] bg-[rgba(0,0,0,0.7)] z-[9999] pt-[110px]`}
      >
        <div className="w-full bg-white h-full rounded-t-[6px] relative">
          <div className="py-5 flex justify-between items-center px-5">
            <p className="text-lg font-bold">방명록</p>
            <div className="flex gap-2">
              <button onClick={getVisitLogs} className='w-5 h-5 bg-[url("./assets/reset.svg")]'></button>
              <button
                onClick={() => setVisitLogToast(false)}
                className='w-5 h-5 bg-[url("./assets/close-toast.svg")]'
              ></button>
            </div>
          </div>
          <div className="h-[calc(100%-60px)] overflow-auto pb-[60px]">
            <VisitLogContent visitLogs={visitLogs} afterDeleteCallback={getVisitLogs} />
          </div>
          <div className="absolute bottom-0 bg-white w-full h-[60px] py-[10px] border-t border-[#D9D9D9] flex px-5 items-center justify-between">
            <p onClick={() => setPostVisitLogPopState(true)} className="text-md text-[#9A9A9D] select-none">
              댓글을 빙자한 방명록 남겨주세요. :{')'}
            </p>
            <button onClick={() => setPostVisitLogPopState(true)} className="px-4 w-fit h-full border rounded-[6px]">
              등록
            </button>
          </div>
        </div>
      </div>
      {postVisitLogPopState && (
        <PostVisitLog afterPostCallback={getVisitLogs} close={() => setPostVisitLogPopState(false)} />
      )}
    </div>
  );
}
