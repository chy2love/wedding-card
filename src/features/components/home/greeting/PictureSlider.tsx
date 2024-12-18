'use client';
import Image from 'next/image';

export function PictureSlider() {
  return (
    <div className="w-full h-[258px]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/cktScoOlC-A?si=4f48dGyX5JeQRj-2&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=cktScoOlC-A&amp;modestbranding=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
