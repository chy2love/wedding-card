'use client';
import { gallery } from '@/data/data';
import { GalleryMenu } from './GalleryMenu';
import GalleryMore from './GalleryMore';
import { GalleryPhoto, SingleTypePhotoUrlInfoType } from './GalleryPhoto';
import { useState, useEffect } from 'react';
export function Gallery() {
  const [galleryType, setGalleryType] = useState<'gallery' | 'man' | 'woman' | 'couple'>('gallery');
  const [photoArr, setPhotoArr] = useState<SingleTypePhotoUrlInfoType[]>([]);
  useEffect(() => {
    if (galleryType === 'gallery') {
      setPhotoArr(new Array(6).fill(0).map((_, i) => gallery.gallery[i]));
    }
    if (galleryType === 'man') {
      setPhotoArr(new Array(6).fill(0).map((_, i) => gallery.man[i]));
    }
    if (galleryType === 'woman') {
      setPhotoArr(new Array(6).fill(0).map((_, i) => gallery.woman[i]));
    }
    if (galleryType === 'couple') {
      setPhotoArr(new Array(6).fill(0).map((_, i) => gallery.couple[i]));
    }
    return () => {};
  }, [galleryType]);
  return (
    <div>
      <GalleryMenu galleryType={galleryType} setGalleryType={setGalleryType} />
      <GalleryPhoto photoArr={photoArr} galleryType={galleryType} />
      <GalleryMore />
    </div>
  );
}
