import { Dispatch, SetStateAction } from 'react';

export function GalleryMenu({
  galleryType,
  setGalleryType
}: {
  galleryType: 'gallery' | 'man' | 'woman' | 'couple';
  setGalleryType: Dispatch<SetStateAction<'gallery' | 'man' | 'woman' | 'couple'>>;
}) {
  return (
    <div className="w-full h-[52px] px-[25px] pt-5 pb-[10px] flex gap-5">
      <button
        onClick={() => setGalleryType('gallery')}
        className={`pb-[6px] text-md ${galleryType === 'gallery' && 'font-bold border-b-2 border-solid border-black'}`}
      >
        갤러리
      </button>
      <button
        onClick={() => setGalleryType('man')}
        className={`pb-[6px] text-md ${galleryType === 'man' && 'font-bold border-b-2 border-solid border-black'}`}
      >
        신랑 최하영
      </button>
      <button
        onClick={() => setGalleryType('woman')}
        className={`pb-[6px] text-md ${galleryType === 'woman' && 'font-bold border-b-2 border-solid border-black'}`}
      >
        신부 윤소희
      </button>
      <button
        onClick={() => setGalleryType('couple')}
        className={`pb-[6px] text-md ${galleryType === 'couple' && 'font-bold border-b-2 border-solid border-black'}`}
      >
        연인시절
      </button>
    </div>
  );
}
