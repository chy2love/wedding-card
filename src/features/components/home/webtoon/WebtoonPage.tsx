import Image from 'next/image';
import Link from 'next/link';
interface WebtoonType {
  id: number;
  title: string;
  rating: string;
}
export const webtoonList: WebtoonType[] = [
  {
    id: 1,
    title: '1화 게임 & 개발',
    rating: '9.83'
  },
  {
    id: 2,
    title: '2화 첫만남',
    rating: '9.98'
  },
  {
    id: 3,
    title: '3화 빠른 전개',
    rating: '9.20'
  },
  {
    id: 4,
    title: '4화 고백한 이유',
    rating: '9.83'
  },
  {
    id: 5,
    title: '5화 우리의 특별함!',
    rating: '9.99'
  }
];
export default function WebtoonPage() {
  return (
    <div>
      <div className="w-full h-[258px]">{/* <Image /> */}</div>
      <div className="p-5">
        <p className="text-[18px] font-bold mb-2">우리의 만남</p>
        <p className="text-md text-[#484848] mb-4">글/그림 윤소희</p>
        <p className="text-[#9A9A9D] text-sm leading-[16px] mb-4">
          3년의 만남 끝에 결혼하는 하영, 소희.
          <br />
          지역, 학교, 회사, 나이 모든게 다른 둘은 어떻게 만나게 된 것인가?
          <br />
          유쾌한 하영과 소희의 우당탕탕 즐거운 연애 스토리
          <br />
        </p>
        <div className="flex gap-[6px] pb-[30px] border-b border-[#D9D9D9]">
          <p className="flex items-center px-2 h-[21px] rounded-[6px] bg-[#EBEBEB] text-sm text-[#666667]">#로맨스</p>
          <p className="flex items-center px-2 h-[21px] rounded-[6px] bg-[#EBEBEB] text-sm text-[#666667]">#연상연하</p>
          <p className="flex items-center px-2 h-[21px] rounded-[6px] bg-[#EBEBEB] text-sm text-[#666667]">#첫사랑</p>
          <p className="flex items-center px-2 h-[21px] rounded-[6px] bg-[#EBEBEB] text-sm text-[#666667]">
            #은 아니지만 끝사랑
          </p>
        </div>
        {webtoonList.map((webtoon) => (
          <WebtoonItem key={webtoon.id} webtoon={webtoon} />
        ))}
      </div>
    </div>
  );
}
function WebtoonItem({ webtoon }: { webtoon: WebtoonType }) {
  return (
    <Link href={`/dynamic/webtoon-detail/${webtoon.id}`}>
      <div className="h-[67px] flex gap-2 py-1 px-5 items-center border-b border-[#D9D9D9]">
        <div className="w-[92px] h-[56px] relative overflow-hidden rounded-[6px]">{/* <Image /> */}</div>
        <div className="flex flex-col gap-2">
          <p className="text-md">{webtoon.title}</p>
          <div className="flex gap-[10px] items-center text-[#9B9B9B] text-sm">
            <p>⭐ {webtoon.rating}</p>
            <p>2025.01.18</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
