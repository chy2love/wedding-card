'use client';
import { thumbnailArr } from '@/data/data';
import { VisitLogItem } from '@/types/types';
import Image from 'next/image';
import { useState } from 'react';
import PopWrap from '../../ui/PopWrap';
import { useForm } from 'react-hook-form';
export default function VisitLogContent({
  visitLogs,
  afterDeleteCallback
}: {
  visitLogs: VisitLogItem[];
  afterDeleteCallback: () => void;
}) {
  return (
    <div className="w-full">
      {visitLogs.map((visitLog) => (
        <VisitLogContentItem key={visitLog.id} visitLog={visitLog} afterDeleteCallback={afterDeleteCallback} />
      ))}
    </div>
  );
}
function VisitLogContentItem({
  visitLog,
  afterDeleteCallback
}: {
  visitLog: VisitLogItem;
  afterDeleteCallback: () => void;
}) {
  const [deletePopState, setDeletePopState] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm();
  const watching = watch();
  const [errorState, setErrorState] = useState<boolean>(false);
  const validation = () => {
    if (!watching.password || watching.password.length === 0) {
      return false;
    }
    return true;
  };
  const onSubmit = async (data: any) => {
    const response = await fetch(`/api/dynamic/visit-log/${visitLog.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: data.password })
    });
    if (response.status === 200) {
      afterDeleteCallback();
      setDeletePopState(false);
    } else if (response.status === 401) {
      setErrorState(true);
    } else {
      alert('방명록 삭제에 실패했습니다.');
    }
  };
  return (
    <>
      <div className="w-full relative p-5 flex gap-[10px] border-b border-[#EBEBEB]">
        <div className="w-10 h-10 rounded-[4px] overflow-hidden">
          <Image
            width={0}
            height={0}
            className="w-full h-full"
            src={thumbnailArr.find((item) => item.id === visitLog.thumbnail)!.thumbnailUrl}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-[6px] items-center">
            <p className="text-md text-black">{visitLog.name}</p>
            <p className="text-sm text-[#9B9B9B]">{visitLog.date}</p>
          </div>
          <p className="text-[#666667] text-md">{visitLog.message}</p>
        </div>
        <button
          onClick={() => setDeletePopState(true)}
          className='absolute top-5 right-5 w-5 h-5 bg-[url("./assets/delete-visit-log.svg")]'
        ></button>
      </div>
      {/* 삭제 팝업 만들기 */}
      {deletePopState && (
        <PopWrap>
          <div className="w-full bg-white p-5 rounded-[6px]">
            <div className="flex gap-[10px] items-center justify-between mb-5">
              <p className="text-lg font-bold">방명록 삭제</p>
              <div onClick={() => setDeletePopState(false)} className="bg-interview-close w-5 h-5 cursor-pointer"></div>
            </div>
            <p className="text-[#666667] text-md mb-1">방명록을 삭제하시겠습니까?</p>
            <p className="text-[#666667] text-md mb-6">등록할 때 입력하신 비밀번호를 입력해주세요.</p>
            <input
              type="password"
              placeholder="입력해 주세요"
              className={` px-1 w-full h-[30px] text-lg placeholder:text-[#D0D0D0]  border-b-2 focus:border-black ${validation() ? 'border-black' : 'border-[#EBEBEB]'} ${errorState ? 'border-red-500 mb-2' : 'mb-6'} `}
              {...register('password', { required: '비밀번호를 입력해 주세요.' })}
            />
            {errorState && <p className="text-sm text-red-500 mb-6">비밀번호가 일치하지 않습니다.</p>}
            <button
              disabled={!validation()}
              onClick={handleSubmit(onSubmit)}
              className={`cursor-pointer w-full h-10 border  rounded-[8px]  text-md font-bold flex items-center justify-center ${validation() ? 'text-black border-b' : 'border-[#9A9A9D] text-[#9A9A9D]'}`}
            >
              삭제
            </button>
          </div>
        </PopWrap>
      )}
    </>
  );
}
