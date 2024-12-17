import { Map } from './Map';
import { BusPath, ByCar, SubwayPath } from './PathDetail';

export default function HowToComePage() {
  return (
    <div>
      <div className="fixed left-[50%] translate-x-[-50%] top-0 bg-white h-[51px] max-w-[440px] w-full flex justify-center items-center gap-[11px] px-[19px] border-b border-[#666667] z-[999]">
        귀한 걸음 오시는 길
      </div>
      <div className="pt-[51px]">
        <Map />
        <div className="h-[88px] border-b-[6px] border-[#EBEBEB] flex flex-col gap-[10px] p-5">
          <p className="text-lg font-bold">가천 컨벤션센터</p>
          <p className="text-[#666667] text-md">경기 성남시 수정구 성남대로 1342(복정동 620-2) 5층</p>
        </div>
        <div className="p-5 flex flex-col gap-[30px]">
          <BusPath />
          <SubwayPath />
          <ByCar />
        </div>
      </div>
    </div>
  );
}
