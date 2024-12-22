'use client';

import Link from 'next/link';
import PopWrap from '../../ui/PopWrap';
import { useState, useEffect } from 'react';
export default function RsvpPop() {
  const [rsvpState, setRsvpState] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem('rsvpState') === 'true') {
      setRsvpState(false);
    } else {
      setRsvpState(true);
    }
  }, []);
  const todayClose = () => {
    localStorage.setItem('rsvpState', 'true');
    setRsvpState(false);
  };

  return (
    <>
      {rsvpState && (
        <PopWrap>
          <div className="w-full">
            <div className="bg-white rounded-[6px] w-full pt-10 pb-5 px-5 relative mb-3">
              <p className="w-full flex justify-center text-lg font-bold mb-5">💌 참석 여부 전달 🙏</p>
              <div className="flex flex-col items-center justify-center text-[#9A9A9D] gap-[6px] text-md mb-10">
                <p>결혼식에 참석해주시는 모든 분들을</p>
                <p>더욱 특별하게 모시고자 하오니,</p>
                <p>참석 여부 전달을 부탁드립니다.</p>
              </div>
              <div className="text-md text-[#666667] flex flex-col gap-[6px] mb-[30px]">
                <p>
                  ❤️ 신랑 <b className="text-[#1554F6]">최하영</b>, 신부 <b className="text-[#FF1D89]">윤소희</b>
                </p>
                <p>📆 2025년 1월 18일 (토) 오후 5시 30분</p>
                <p>💒 가천 컨벤션 센터 5층 단독홀</p>
              </div>
              <Link
                href={'/dynamic/rsvp'}
                className="flex justify-center items-center border text-md font-bold h-10 w-full rounded-[6px]"
              >
                참석여부 전달
              </Link>
              <button
                onClick={() => setRsvpState(false)}
                className="absolute top-5 right-5 w-5 h-5 bg-interview-close"
              ></button>
            </div>
            <button onClick={todayClose} className="text-white text-md w-full flex justify-center">
              오늘 하루 보지 않기
            </button>
          </div>
        </PopWrap>
      )}
    </>
  );
}
