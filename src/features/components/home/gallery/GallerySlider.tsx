'use client';
import Image from 'next/image';
import { Dispatch, SetStateAction, useRef } from 'react';
import { SingleTypePhotoUrlInfoType } from './GalleryPhoto';
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
export default function GallerySlider({
  photoArr,
  popInfo,
  setPopInfo,
  photoArrLength
}: {
  photoArr: SingleTypePhotoUrlInfoType[];
  setPopInfo: Dispatch<SetStateAction<number | null>>;
  popInfo: number | null;
  photoArrLength: number;
}) {
  const sliderRef = useRef<SwiperRef>(null);
  const swiper = useSwiper();
  const handleBack = () => {
    if (popInfo === null) return;
    sliderRef.current!.swiper.slidePrev();
  };
  const handleFront = () => {
    if (popInfo === null) return;
    sliderRef.current!.swiper.slideNext();
  };
  return (
    <div>
      {popInfo !== null && (
        <div className="fixed top-0 bottom-0 w-full flex items-center justify-center left-[50%] translate-x-[-50%] max-w-[440px] bg-[rgba(0,0,0,0.7)] z-[9999]">
          <div
            onClick={() => setPopInfo(null)}
            className="cursor-pointer absolute w-[20px] h-[20px] bg-pop-close bg-no-repeat top-5 right-5 z-[100]"
          ></div>
          <div
            onClick={handleBack}
            className="cursor-pointer absolute w-[50px] h-[50px] bg-img-back bg-no-repeat left-0 top-[50%] translate-y-[-50%] z-[100]"
          ></div>
          <div
            onClick={handleFront}
            className="cursor-pointer absolute w-[50px] h-[50px] bg-img-front bg-no-repeat right-0 top-[50%] translate-y-[-50%] z-[100]"
          ></div>
          <p className="cursor-pointer absolute bottom-5 left-[50%] translate-x-[-50%] bg-[rgba(102,102,103,0.4)] flex items-center justify-center px-2 w-fit h-6 text-white text-sm font-bold rounded-[6px] z-[100]">
            {popInfo + 1}/{photoArrLength}
          </p>
          <Swiper
            ref={sliderRef}
            lazyPreloadPrevNext={1}
            slidesPerView={1}
            initialSlide={popInfo}
            onSlideChange={(swiper) => setPopInfo(swiper.realIndex)}
          >
            {photoArr.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="w-full relative">
                  <Image
                    loading="lazy"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-auto object-contain"
                    src={photo.imgUrl}
                    alt=""
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
