import { RsvpForm } from '@/features/components/home/rsvp/RsvpForm';
import { RsvpHeader } from '@/features/components/home/rsvp/RsvpHeader';

export default function RsvpPage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[440px] w-full flex justify-center pb-[82px]">
        <div className="w-full max-w-[440px] min-w-[390px]">
          <RsvpHeader />
          <RsvpForm />
        </div>
      </div>
    </div>
  );
}
