'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PopWrap from '../../ui/PopWrap';
import Image from 'next/image';
import moment from 'moment';
import { thumbnailArr, visitLog } from '@/data/data';

export default function PostVisitLog({
  afterPostCallback,
  close
}: {
  afterPostCallback: () => void;
  close: () => void;
}) {
  const [selectedThumbnail, setSelectedThumbnail] = useState<number>(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const watching = watch();
  const validation = () => {
    if (!watching.name || watching.name.length === 0) {
      return false;
    }
    if (!watching.password || watching.password.length === 0) {
      return false;
    }
    if (!watching.message || watching.message.length === 0) {
      return false;
    }
    return true;
  };
  const onSubmit = async (data: any) => {
    const date = moment().format('YYYY-MM-DD HH:mm');
    console.log(' => ', { ...data, thumbnail: selectedThumbnail });
    const response = await fetch('/api/dynamic/visit-log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, thumbnail: selectedThumbnail, date })
    });
    if (response.status === 200) {
      afterPostCallback();
    } else {
      alert('방명록 등록에 실패했습니다.');
    }
  };
  return (
    <PopWrap>
      <div className="w-full bg-white p-5 rounded-[6px]">
        <div className="flex gap-[10px] items-center justify-between mb-5">
          <p className="text-lg font-bold">방명록 등록</p>
          <div onClick={close} className="bg-interview-close w-5 h-5 cursor-pointer"></div>
        </div>
        <p className="text-md text-[#666667] mb-[10px]">썸네일</p>
        <div className="flex gap-[10px] w-full h-fit mb-10">
          {visitLog.map((thumbnail, idx) => (
            <div
              className={`w-[calc((100%-30px)/4)] h-[70px] overflow-hidden relative rounded-[4px]`}
              onClick={() => setSelectedThumbnail(idx)}
            >
              <Image
                src={idx === selectedThumbnail ? thumbnail.active : thumbnail.default}
                alt=""
                fill
                className="w-full"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-5 w-full mb-10">
          <div className="w-[calc(50%-10px)]">
            <p className="text-md text-bk-03 asterisk mb-3">이름</p>
            <input
              type="text"
              placeholder="입력해 주세요"
              className={`px-1 w-full h-[30px] text-lg placeholder:text-[#D0D0D0]  border-b-2 focus:border-black ${errors.name ? 'border-red-500' : 'border-[#EBEBEB]'} `}
              {...register('name', { required: '이름을 입력해 주세요.' })}
            />
          </div>
          <div className="w-[calc(50%-10px)]">
            <p className="text-md text-bk-03 asterisk mb-3">비밀번호</p>
            <input
              type="password"
              placeholder="입력해 주세요"
              className={`px-1 w-full h-[30px] text-lg placeholder:text-[#D0D0D0]  border-b-2 focus:border-black ${errors.password ? 'border-red-500' : 'border-[#EBEBEB]'}`}
              {...register('password', { required: '비밀번호을 입력해 주세요.' })}
            />
          </div>
        </div>
        <p className="text-md text-bk-03 asterisk mb-3">메시지</p>
        <textarea
          className={` mb-10 ${errors.password ? 'border-red-500' : 'border-[#EBEBEB]'} focus:border-black focus:text-black w-full h-[100px] placeholder:text-[#D0D0D0] placeholder:text-lg py-2 border-t-2 border-b-2 border-[#D9D9D9] rounded-none resize-none`}
          placeholder="입력해주세요"
          {...register('message', { required: '메시지를 입력해 주세요.' })}
        />
        <button
          onClick={handleSubmit(onSubmit)}
          disabled={!validation()}
          className={`cursor-pointer w-full h-10 border  rounded-[8px]  text-md font-bold flex items-center justify-center ${validation() ? 'text-black border-b' : 'border-[#9A9A9D] text-[#9A9A9D]'}`}
        >
          등록
        </button>
      </div>
    </PopWrap>
  );
}
