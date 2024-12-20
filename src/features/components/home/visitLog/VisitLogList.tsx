'use client';
import { VisitLogItem as VisitLogType } from '@/types/types';
import { VisitLogItem } from './VisitLogItem';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
export function VisitLogList({ visitLogs }: { visitLogs: VisitLogType[] }) {
  const [pagedList, setPagedList] = useState<VisitLogType[][]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const chunkArray = (array: VisitLogType[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  useEffect(() => {
    const chunked = chunkArray(visitLogs, 3);
    const pagedMapArr: VisitLogType[][] = [];
    chunked.forEach((chunk, index) => {
      pagedMapArr.push(chunk);
    });
    setPagedList(pagedMapArr);
  }, [visitLogs]);
  return (
    <div className="pt-5 h-[341px] flex flex-col items-center gap-5">
      <div className="w-full max-h-[365px]">
        <Swiper
          allowTouchMove={false}
          speed={0}
          observeParents={true}
          observer={true}
          onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            el: '.swiper-pagnation',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
            renderBullet: function (idx: number, className: string) {
              return `<span class="flex h-full items-center justify-center text-md w-5 text-[#33302F] ${className} "> ${idx + 1} </span>`;
            }
          }}
        >
          {pagedList.map((visitLogArr, idx) => (
            <>
              <SwiperSlide key={idx}>
                {visitLogArr.map((visitLog) => (
                  <VisitLogItem visitLog={visitLog} />
                ))}
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
      <div className="swiper-pagnation h-5 flex justify-center ">{/* 페이지네이션 */}</div>
    </div>
  );
}
