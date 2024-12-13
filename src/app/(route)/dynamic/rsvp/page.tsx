import { RsvpForm } from '@/features/components/home/rsvp/RsvpForm';
import { RsvpHeader } from '@/features/components/home/rsvp/RsvpHeader';

export default function RsvpPage() {
  return (
    <div className="w-screen h-screen">
      <RsvpHeader />
      <RsvpForm />
    </div>
  );
}
