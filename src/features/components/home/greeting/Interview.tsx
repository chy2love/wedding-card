import Image from 'next/image';
import InterviewItem from './InterviewItem';
const INTERVIEWLIST = [
  { src: '', text: '감사 인사' },
  { src: '', text: '신랑 인터뷰' },
  { src: '', text: '신부 인터뷰' }
];

export function Interview() {
  return (
    <div className="w-full h-[187px] pt-[44px] pb-5 flex justify-center">
      <div className="w-[353px] flex flex-col gap-[10px]">
        <p className="text-[14px]">잠깐! 인사를 못 받지 않았나요?</p>
        <div className="w-full flex gap-2">
          {INTERVIEWLIST.map((interview) => (
            <InterviewItem interview={interview} />
          ))}
        </div>
      </div>
    </div>
  );
}
