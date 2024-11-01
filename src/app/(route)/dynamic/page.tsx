import { Navigator } from '@/features/components/navigator/Navigator';
import { Divider } from '@/features/components/ui/Divider';
import { WebtoonThumbnail } from '@/features/components/home/webtoon/WebtoonThumbnail';
import { Greeting } from '@/features/Greeting';
import { Gallery } from '@/features/components/home/gallery/Gallery';
import { HowToCome } from '@/features/components/home/howToCome/HowToCome';
import { VisitLog } from '@/features/components/home/visitLog/VisitLog';

export default function DynamicPage() {
  return (
    <>
      <div className="w-screen flex justify-center pb-[82px]">
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
        </div>
      </div>
      <Navigator />
    </>
  );
}
