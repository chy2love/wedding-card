import { AccountArea } from '@/features/components/home/account/AccountArea';
import { AccountHeader } from '@/features/components/home/account/AccountHeader';

export default function AccountPage() {
  return (
    <div className="flex justify-center bg-[#FFD9D9]">
      <div className="max-w-[440px] h-screen w-full flex justify-center pb-[82px] bg-white">
        <div className="w-full max-w-[440px] min-w-[390px]">
          <AccountHeader />
          <AccountArea />
        </div>
      </div>
    </div>
  );
}
