import { AccountArea } from '@/features/components/home/account/AccountArea';
import { AccountHeader } from '@/features/components/home/account/AccountHeader';

export default function AccountPage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[440px] w-full flex justify-center pb-[82px]">
        <div className="w-full max-w-[440px] min-w-[390px]">
          <AccountHeader />
          <AccountArea />
        </div>
      </div>
    </div>
  );
}
