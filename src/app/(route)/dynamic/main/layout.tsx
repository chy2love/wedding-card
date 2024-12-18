import { Navigator } from '@/features/components/navigator/Navigator';
import Script from 'next/script';

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center">
      <div className="max-w-[440px] flex justify-center pb-[82px] w-full">
        <div className="w-full max-w-[440px] min-w-[390px]">{children}</div>
      </div>
      <Navigator />
    </div>
  );
}
