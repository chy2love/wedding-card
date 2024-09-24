export function Intro() {
  return (
    <div className="w-full pr-5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-end">
          <button className="w-6 h-6 cursor-pointer bg-menu mb-6"></button>
          <p className="text-[24px] text-bk-02 h-[33px] font-dm-serif">D-45</p>
          <div>
            <p>A</p>
            <p>Brilliant</p>
            <p>Start</p>
          </div>
        </div>
        <div>
          {/* TODO */}
          <p>어머니·아버지의 장남 최하영</p>
          <p>어머니·아버지의 장녀 윤소희</p>
          <p>2025년 2월 22일 오후 6시 30분</p>
          <p>서울 웨딩뭐시기컨벤션 2F 빈티지룸</p>
        </div>
      </div>
    </div>
  );
}
