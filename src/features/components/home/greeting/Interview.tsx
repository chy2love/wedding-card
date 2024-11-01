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
            <div key={interview.text} className="grow h-[100px]">
              <div className="h-[80px] w-full bg-green-200 mb-[6px] rounded-[4px]"></div>
              <p className="text-[13px]">{interview.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
