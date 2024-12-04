import { Navigator } from '@/features/components/navigator/Navigator';
import { Divider } from '@/features/components/ui/Divider';
import { WebtoonThumbnail } from '@/features/components/home/webtoon/WebtoonThumbnail';
import { Greeting } from '@/features/Greeting';
import { Gallery } from '@/features/components/home/gallery/Gallery';
import { HowToCome } from '@/features/components/home/howToCome/HowToCome';
import { VisitLog } from '@/features/components/home/visitLog/VisitLog';
import { RsvpLinkButton } from '@/features/components/home/rsvp/RsvpLinkButton';
import { AccountLinkButton } from '@/features/components/home/account/AccountLinkButton';
import { LastGreeting } from '@/features/components/home/last/LastGreeting';
import Script from 'next/script';
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_API_KEY}&autoload=false`;

export default function DynamicPage() {
  return (
    <>
      <div className="w-screen flex justify-center pb-[82px]">
        <Script type="text/javascript" src={KAKAO_SDK_URL} strategy="beforeInteractive" async />

        <div className="w-full max-w-[440px] min-w-[390px] min-h-[100vh]">
          <Greeting />
          <Divider />
          <WebtoonThumbnail />
          <Divider />
          <Gallery />
          <Divider />
          <HowToCome />
          <Divider />
          <VisitLog />
          <Divider />
          <RsvpLinkButton />
          <Divider />
          <AccountLinkButton />
          <Divider />
          <LastGreeting />
        </div>
      </div>
      <Navigator />
    </>
  );
}
