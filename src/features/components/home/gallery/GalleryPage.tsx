'use client';
import { gallery } from '@/data/data';
import { GalleryMenu } from './GalleryMenu';
import { GalleryPhoto, SingleTypePhotoUrlInfoType } from './GalleryPhoto';
import { useState, useEffect } from 'react';
export default function GalleryPage() {
  const [galleryType, setGalleryType] = useState<'gallery' | 'man' | 'woman' | 'couple'>('gallery');
  const [photoArr, setPhotoArr] = useState<SingleTypePhotoUrlInfoType[]>([]);
  useEffect(() => {
    setPhotoArr(gallery[galleryType]);
    return () => {};
  }, [galleryType]);
  return (
    <>
      <div className="fixed left-[50%] translate-x-[-50%] top-0 bg-white h-[51px] max-w-[440px] w-full flex justify-center items-center gap-[11px] px-[19px] border-b border-[#666667] z-[999]">
        최하영 💘 윤소희 사진모음.zip
      </div>
      <div className="pt-[51px]">
        <GalleryMenu galleryType={galleryType} setGalleryType={setGalleryType} />
        <GalleryPhoto photoArr={photoArr} galleryType={galleryType} />
      </div>
    </>
  );
}
