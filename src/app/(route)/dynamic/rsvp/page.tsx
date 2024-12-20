import { RsvpForm } from '@/features/components/home/rsvp/RsvpForm';
import { RsvpHeader } from '@/features/components/home/rsvp/RsvpHeader';

export default function RsvpPage() {
  return (
    <div className="flex justify-center bg-[#FFD9D9]">
      <div className="max-w-[440px] min-h-screen w-full flex justify-center pb-[82px] bg-white">
        <div className="w-full max-w-[440px] min-w-[390px]">
          <RsvpHeader />
          <RsvpForm />
        </div>
      </div>
    </div>
  );
}
