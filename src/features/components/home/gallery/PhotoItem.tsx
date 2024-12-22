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
  idx
}: {
  photo: SingleTypePhotoUrlInfoType;
  popInfo: number | null;
  setPopInfo: Dispatch<SetStateAction<number | null>>;
  idx: number;
}) {
  const handleImgClick = () => {
    if (popInfo === null) {
      setPopInfo(idx);
    }
  };

  return (
    <>
      <div
        onClick={handleImgClick}
        className={`w-[calc((100%-20px)/3)] rounded-[4px] overflow-hidden cursor-pointer relative`}
      >
        <Image
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto object-contain"
          src={photo.thumbnailUrl}
          alt=""
        />
      </div>
    </>
  );
}
