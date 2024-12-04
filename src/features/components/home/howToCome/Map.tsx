'use client';
import Script from 'next/script';
import { useEffect } from 'react';
import 'react-kakao-maps-sdk';

export function Map() {
  const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_API_KEY}&autoload=false`;
  useEffect(() => {
    kakao.maps.load(() => {
      // 2. 지도 생성 및 설정
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.449904, 127.12713),
        level: 3
      };
      const map = new kakao.maps.Map(container as HTMLElement, options);
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.449904, 127.12713)
      });
    });
    // 1. 카카오 지도 초기화
  }, []);

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <div className="w-full h-[250px]" id="map"></div>
    </>
  );
}
