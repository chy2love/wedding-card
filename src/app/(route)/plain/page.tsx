import { Intro } from '@/features/plain/intro';
export default function PlainPage() {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-full max-w-[440px] min-w-[390px]">
        <Intro />
      </div>
    </div>
  );
}
