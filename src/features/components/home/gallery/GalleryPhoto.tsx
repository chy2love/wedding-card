'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import PhotoItem from './PhotoItem';
import GallerySlider from './GallerySlider';
interface AllPhotoUrlInfoType extends Record<'gallery' | 'man' | 'woman' | 'couple', SingleTypePhotoUrlInfoType[]> {}

export interface SingleTypePhotoUrlInfoType {
  id: number;
  thumbnailUrl: string;
  imgUrl: string;
}
//길이 9 고정

export function GalleryPhoto({
  galleryType,
  photoArr
}: {
  galleryType: 'gallery' | 'man' | 'woman' | 'couple';
  photoArr: SingleTypePhotoUrlInfoType[];
}) {
  const [popInfo, setPopInfo] = useState<number | null>(null);
  useEffect(() => {
    if (popInfo !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [popInfo]);
  return (
    <>
      <div className="pt-[10px] pb-5 px-5 flex flex-wrap items-start gap-[10px]">
        {photoArr.map((photo, idx) => (
          <PhotoItem key={photo.id} photo={photo} idx={idx} popInfo={popInfo} setPopInfo={setPopInfo} />
        ))}
        <GallerySlider photoArr={photoArr} popInfo={popInfo} setPopInfo={setPopInfo} photoArrLength={photoArr.length} />
      </div>
    </>
  );
}
