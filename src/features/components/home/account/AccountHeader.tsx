'use client';

import { useRouter } from 'next/navigation';

export function AccountHeader() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="h-[51px] w-full flex items-center gap-[11px] px-[19px] border-b border-[#666667] mb-5">
      <div className="w-6 h-6 bg-left-arrow-24 cursor-pointer" onClick={goBack}></div>
      <p className="font-bold text-lg text-[#666667]">축의금 전달하기</p>
    </div>
  );
}
