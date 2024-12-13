'use client';
import { GalleryMenu } from './GalleryMenu';
import GalleryMore from './GalleryMore';
import { GalleryPhoto, SingleTypePhotoUrlInfoType } from './GalleryPhoto';
import { useState } from 'react';
export function Gallery() {
  const [galleryType, setGalleryType] = useState<'gallery' | 'man' | 'woman' | 'couple'>('gallery');
  const photoArr: SingleTypePhotoUrlInfoType[] = [
    {
      id: 1,
      thumbnailUrl: 'https://highcharts.com/demo/icons/products/core.svg',
      imgUrl: 'https://highcharts.com/demo/icons/products/core.svg'
    },
    {
      id: 2,
      thumbnailUrl: 'https://highcharts.com/demo/icons/products/core.svg',
      imgUrl: 'https://highcharts.com/demo/icons/products/core.svg'
    },
    {
      id: 3,
      thumbnailUrl: 'https://highcharts.com/demo/icons/products/core.svg',
      imgUrl: 'https://highcharts.com/demo/icons/products/core.svg'
    },
    {
      id: 5,
      thumbnailUrl: 'https://highcharts.com/demo/icons/products/core.svg',
      imgUrl: 'https://highcharts.com/demo/icons/products/core.svg'
    },
    {
      id: 6,
      thumbnailUrl: 'https://highcharts.com/demo/icons/products/core.svg',
      imgUrl: 'https://highcharts.com/demo/icons/products/core.svg'
    },
    {
      id: 7,
      thumbnailUrl: 'https://highcharts.com/demo/icons/products/core.svg',
      imgUrl: 'https://highcharts.com/demo/icons/products/core.svg'
    }
  ];
  return (
    <div>
      <GalleryMenu galleryType={galleryType} setGalleryType={setGalleryType} />
      <GalleryPhoto photoArr={photoArr} galleryType={galleryType} />
      <GalleryMore />
    </div>
  );
}
