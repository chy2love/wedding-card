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

export default function DynamicPage() {
  return (
    <>
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
    </>
  );
}
