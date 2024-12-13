import { AccountArea } from '@/features/components/home/account/AccountArea';
import { AccountHeader } from '@/features/components/home/account/AccountHeader';

export default function AccountPage() {
  return (
    <div className="w-screen h-screen">
      <AccountHeader />
      <AccountArea />
    </div>
  );
}
