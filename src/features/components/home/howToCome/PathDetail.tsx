'use client';
import { useState } from 'react';
export const BusPath = () => {
  return (
    <div className="flex gap-2">
      <p>🚌</p>
      <div className="flex flex-col gap-3">
        <p className="text-md ">버스안내</p>
        <div className="text-[#666667] text-md leading-5 font-[400]">
          <Bold>일반 버스</Bold>
          <br />
          <span>5, 30, 30-1, 32, 70, 100, 116, 119, 320, 500-5</span>
          <br />
          <Bold>지선 버스&nbsp;</Bold>
          <span>4419</span>
          <br />
          <Bold>간선 버스&nbsp;</Bold>
          <span>302, 303, 462</span>
          <br />
          <Bold>직행 버스&nbsp;</Bold>
          <span>500-1, 500-2, 1117</span>
          <br />
          <Bold>광역 버스&nbsp;</Bold>
          <span>9403</span>
          <br />
          <Bold>수도권 외곽순환도로 가천대역 환승정류장</Bold>
          <br />
          <span>1112, 1650, 8409, 8109</span>
        </div>
      </div>
    </div>
  );
};
export const SubwayPath = () => {
  return (
    <div className="flex gap-2">
      <p>🚝</p>
      <div className="flex flex-col gap-3">
        <p className="text-md ">지하철 안내</p>
        <div className="text-[#666667] text-md leading-5 font-[400]">
          <Bold>수인분당선 &nbsp;</Bold>
          <span>{'가천대역(구 경원대역) 1번 출구'}</span>
        </div>
      </div>
    </div>
  );
};
export const ByCar = () => {
  return (
    <div className="flex gap-2">
      <p>🚗</p>
      <div className="flex flex-col gap-3">
        <p className="text-md ">주차안내</p>
        <div className="text-[#666667] text-md leading-5 font-[400]">
          <Bold>경부고속도로</Bold>
          <br />
          <span>
            {
              '경부고속도로 > 서울요금소(1km) > 서울외곽순환고속도로(구리방면, 1km) > 성남·광주 I(서울방면, 1.5km) > 가천대학교'
            }
          </span>
          <br />
          <br />
          <Bold>중부고속도로</Bold>
          <br />
          <span>{'중부고속도로 > 동서울요금소(외곽순환고속도로 진입) > 송파 IC(성남방면, 1.5km) > 가천대학교'}</span>
        </div>
      </div>
    </div>
  );
};
export function PathDetail() {
  const [selectedTP, setSelectedTP] = useState<'bus' | 'subway' | 'bycar'>('bus');
  const handleTPClick = (tp: 'bus' | 'subway' | 'bycar') => {
    setSelectedTP(tp);
  };

  return (
    <div className="w-full h-fit p-5">
      <div className="flex gap-1 items-center mb-[10px]">
        <p className="text-sm text-white bg-text-pink rounded-[6px] py-1 px-2 h-5">오시는 길</p>
        <p className="text-lg font-bold leading-5">가천컨벤션센터</p>
      </div>
      <p className="text-[#666667] text-md mb-5">{'경기 성남시 수정구 성남대로 1342 (복정동 620-2) 5층'}</p>
      <div className="flex items-center gap-5 mb-3">
        <button
          onClick={() => handleTPClick('bus')}
          className={`h-5 text-md pb-[6px] ${selectedTP === 'bus' ? 'font-bold border-b-2 border-solid border-black' : ''}`}
        >
          버스
        </button>
        <button
          onClick={() => handleTPClick('subway')}
          className={`h-5 text-md pb-[6px] ${selectedTP === 'subway' ? 'font-bold border-b-2 border-solid border-black' : ''}`}
        >
          지하철
        </button>
        <button
          onClick={() => handleTPClick('bycar')}
          className={`h-5 text-md pb-[6px] ${selectedTP === 'bycar' ? 'font-bold border-b-2 border-solid border-black' : ''}`}
        >
          자차
        </button>
      </div>
      {selectedTP === 'bus' ? BusPath() : selectedTP === 'subway' ? SubwayPath() : ByCar()}
    </div>
  );
}
function Bold({ children }: { children: React.ReactNode }) {
  return <span className="text-md font-bold">{children}</span>;
}
