import Image from 'next/image';

export function VisitLogItem() {
  return (
    <div className="h-[87px] flex gap-2">
      <Image src={'/edit.svg'} alt="thumbnail" width={92} height={87} />
      <div className="flex flex-col w-[calc(100%-100px)]">
        <p className="text-sm text-primary-main font-bold mb-[9px]">홍길동</p>
        <p className="text-md w-full ellipsis-2 mb-[14px] leading-5">
          결혼축하해 둘이 너무 결혼축하해 둘이 너무 결혼축하해 둘이 너무 결혼축하해 둘이 너무 결혼축하해 둘이 너무
          결혼축하해 둘이 너무 결혼축하해 둘이 너무
        </p>
        <p className="text-sm text-[#9B9B9B]">2024.12.08</p>
      </div>
    </div>
  );
}
