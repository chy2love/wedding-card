import Image from 'next/image';
import { SingleTypePhotoUrlInfoType } from './GalleryPhoto';
import { Dispatch, SetStateAction } from 'react';
import { el } from 'date-fns/locale';
// photo : 사진 정보
// popInfo: 팝업 정보 (null: 팝업 없음, number: 팝업 있음)
// setPopInfo: 팝업 정보 변경 함수
// idx: 사진 인덱스
// photoArrLength: 사진 배열 길이
export default function PhotoItem({
  photo,
  popInfo,
  setPopInfo,
  idx,
  photoArrLength
}: {
  photo: SingleTypePhotoUrlInfoType;
  popInfo: number | null;
  setPopInfo: Dispatch<SetStateAction<number | null>>;
  idx: number;
  photoArrLength: number;
}) {
  const handleImgClick = () => {
    if (popInfo === null) {
      setPopInfo(idx);
    }
  };
  const handleBack = () => {
    if (idx === 0) {
      setPopInfo(photoArrLength - 1);
    } else {
      setPopInfo(idx - 1);
    }
  };
  const handleFront = () => {
    if (idx === photoArrLength - 1) {
      setPopInfo(0);
    } else {
      setPopInfo(idx + 1);
    }
  };
  return (
    <>
      <div
        onClick={handleImgClick}
        className={`w-[calc((100%-20px)/3)] h-[127px] rounded-[4px] cursor-pointer relative`}
      >
        <Image layout="fill" objectFit="contain" src={photo.thumbnailUrl} alt="" />
      </div>
      {popInfo === idx && (
        <div className="fixed top-0 bottom-0 w-full flex items-center justify-center left-[50%] translate-x-[-50%] max-w-[440px] bg-[rgba(0,0,0,0.7)] z-[9999]">
          <div className="w-full relative">
            <Image
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-auto object-contain"
              src={photo.imgUrl}
              alt=""
            />
            <div
              onClick={() => setPopInfo(null)}
              className="cursor-pointer absolute w-[20px] h-[20px] bg-pop-close bg-no-repeat top-5 right-5"
            ></div>
            <div
              onClick={handleBack}
              className="cursor-pointer absolute w-[50px] h-[50px] bg-img-back bg-no-repeat left-0 top-[50%] translate-y-[-50%]"
            ></div>
            <div
              onClick={handleFront}
              className="cursor-pointer absolute w-[50px] h-[50px] bg-img-front bg-no-repeat right-0 top-[50%] translate-y-[-50%]"
            ></div>
            <p className="cursor-pointer absolute bottom-5 right-5 bg-[rgba(102,102,103,0.4)] flex items-center justify-center px-2 w-fit h-6 text-white text-sm font-bold rounded-[6px]">
              {idx + 1}/{photoArrLength}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
