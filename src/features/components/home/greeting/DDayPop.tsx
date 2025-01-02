'use client';
import { useEffect, useState } from 'react';
import moment from 'moment';
export function DDayPop() {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const today = moment();
    const weddingDay = moment('2025-01-18');
    const tempDiff = Math.ceil(moment.duration(weddingDay.diff(today)).asDays());
    setDiff(tempDiff);
    return () => {};
  }, []);
  return (
    <div className="absolute w-[353px] h-[49px] bg-[#33302F] flex items-center px-5 rounded-[6px] top-[230px] left-[50%] translate-x-[-50%]">
      <p className="text-white text-[11px] border border-solid border-white rounded-[6px] py-1 px-2 mr-2">D-{diff}</p>
      <p className="text-[14px] text-white leading-[19px]">25.01.18 17:30 가천 컨벤션센터 5F</p>
    </div>
  );
}
