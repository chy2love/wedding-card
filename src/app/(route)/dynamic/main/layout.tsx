import { Navigator } from '@/features/components/navigator/Navigator';
import Script from 'next/script';
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_API_KEY}&autoload=false`;

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center">
      <div className="max-w-[440px] flex justify-center pb-[82px] w-full">
        <Script type="text/javascript" src={KAKAO_SDK_URL} strategy="beforeInteractive" async />

        <div className="w-full max-w-[440px] min-w-[390px]">{children}</div>
      </div>
      <Navigator />
    </div>
  );
}
