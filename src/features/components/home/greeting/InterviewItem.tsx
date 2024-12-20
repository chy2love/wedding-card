'use client';
import { useState, useEffect } from 'react';
import PopWrap from '../../ui/PopWrap';
import Image from 'next/image';
import thanksImg from '../../../../assets/greeting/thanks-img.svg';
import { main } from '@/data/data';
interface Content {
  question: string;
  answer: string;
}
export default function InterviewItem({ interview }: { interview: { src: string; text: string } }) {
  const [popState, setPopState] = useState<boolean>(false);
  useEffect(() => {
    if (popState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [popState]);
  const Thanks = () => {
    return (
      <>
        <div
          onClick={() => setPopState(false)}
          className="absolute top-5 right-5 cursor-pointer w-5 h-5 bg-pop-close bg-no-repeat"
        ></div>
        <Image className="w-full" alt="" src={thanksImg} />
        <div className="w-full h-[204px] pt-[30px] flex items-center flex-col">
          <p className="text-md font-bold text-[#666667] mb-[20px]">최하영 ❤️ 윤소희</p>
          <div className="text-md text-[#9A9A9D] flex flex-col items-center gap-2">
            <p>두 사람이 만나 하나의 매듭이 되고</p>
            <p>하나의 길이 되어</p>
            <p>하나의 보금자리를 이루려 합니다.</p>
            <p>변함없는 믿음과 사랑으로 축복해 주십시오.</p>
          </div>
        </div>
      </>
    );
  };
  const GreetingMan = () => {
    const contents: Content[] = [
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.'
      },
      {
        question: '신랑님의 이름은 무엇인가요?',
        answer: '최하영입니다.1'
      }
    ];
    return (
      <div className="p-5">
        <div
          onClick={() => setPopState(false)}
          className="absolute top-5 right-5 cursor-pointer w-5 h-5 bg-interview-close bg-no-repeat"
        ></div>
        <p className="text-[18px] font-extrabold mb-9">🎤 신랑 최하영의 인터뷰</p>
        <div className="flex flex-col gap-[30px] max-h-[345px] overflow-auto">
          {contents.map((content, index) => (
            <InterviewContent key={index} content={content} />
          ))}
        </div>
      </div>
    );
  };
  const GreetingWoman = () => {
    const contents: Content[] = [
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.'
      },
      {
        question: '신부님의 이름은 무엇인가요?',
        answer: '윤소희입니다.1'
      }
    ];
    return (
      <div className="p-5">
        <div
          onClick={() => setPopState(false)}
          className="absolute top-5 right-5 cursor-pointer w-5 h-5 bg-interview-close bg-no-repeat"
        ></div>
        <p className="text-[18px] font-extrabold mb-9">🎤 신부 윤소희의 인터뷰</p>
        <div className="flex flex-col gap-[30px] max-h-[345px] overflow-auto">
          {contents.map((content, index) => (
            <InterviewContent key={index} content={content} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <>
      <div key={interview.text} className="grow h-[100px]" onClick={() => setPopState(true)}>
        <div className="cursor-pointer h-[80px] w-full mb-[6px] rounded-[4px] relative overflow-hidden">
          <Image
            src={
              interview.text === '감사 인사'
                ? main.thanks
                : interview.text === '신랑 인터뷰'
                  ? main.interview.man
                  : main.interview.woman
            }
            alt=""
            fill
          />
        </div>
        <p className="text-[13px]">{interview.text}</p>
      </div>
      {popState && (
        <PopWrap>
          <div className="w-full bg-white rounded-[6px] overflow-hidden relative">
            {interview.text === '감사 인사'
              ? Thanks()
              : interview.text === '신랑 인터뷰'
                ? GreetingMan()
                : GreetingWoman()}
          </div>
        </PopWrap>
      )}
    </>
  );
}
function InterviewContent({ content }: { content: Content }) {
  return (
    <div>
      <p className="text-md text-[#666667] mb-4 w-[228px]">Q. {content.question}</p>
      <p className="text-md text-[#9A9A9D] w-[228px] pl-5">{content.answer}</p>
    </div>
  );
}
