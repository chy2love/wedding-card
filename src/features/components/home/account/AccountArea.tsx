'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
interface AccountData {
  side: string;
  account: {
    name: string;
    bank: string;
    accountNumber: string;
    kakao?: string;
  }[];
}
const DATA = [
  {
    side: '🤵‍♂️️ 신랑측',
    account: [
      {
        name: '최하영',
        bank: '하나은행',
        accountNumber: '426-910-3716-3907',
        kakao: 'https://qr.kakaopay.com/Ej79LPlA9'
      },
      {
        name: '아버지 최성찬',
        bank: 'SC 제일 은행',
        accountNumber: '204-20-506710'
      },
      {
        name: '어머니 이상숙',
        bank: '하나은행',
        accountNumber: '174-18-149809'
      }
    ]
  },
  {
    side: '👰‍♀️ 신부측',
    account: [
      {
        name: '윤소희',
        bank: '신한은행',
        accountNumber: '110-473-782629',
        kakao: 'https://qr.kakaopay.com/FZNzl8RxG'
      },
      {
        name: '아버지 윤상돈',
        bank: '하나은행',
        accountNumber: '420-910530-99607'
      },
      {
        name: '어머니 박정선',
        bank: '국민은행',
        accountNumber: '350401-04-070073'
      }
    ]
  }
];
export function AccountArea() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-[10px] px-5">
      {DATA.map((data) => (
        <AccountSelectbox data={data} />
      ))}
    </div>
  );
}

function AccountSelectbox({ data }: { data: AccountData }) {
  const [selectBoxState, setSelectBoxState] = useState<boolean>(false);
  const [toasted, setToasted] = useState<boolean>(false);
  const toast = () => {
    if (toasted) return;
    setToasted(true);
    setTimeout(() => {
      setToasted(false);
    }, 3000);
  };
  return (
    <div
      className={`w-full min-h-[50px] border border-[#9A9A9D] px-3
    ${selectBoxState ? 'border-black' : ''}`}
    >
      <p
        onClick={() => setSelectBoxState((prev) => !prev)}
        className="w-full h-[50px]  flex items-center bg-down-arrow-14 bg-no-repeat bg-[top_16px_right_12px] text-[#9A9A9D] text-lg"
      >
        {data.side}
      </p>
      {selectBoxState &&
        data.account.map((account) => (
          <div className="py-3 border-t border-[#D9D9D9] flex items-center justify-between">
            <div className="text-[#666667] text-md flex flex-col gap-[10px]">
              <p>{account.bank}</p>
              <p>{account.accountNumber}</p>
              <p>{account.name}</p>
            </div>
            <div className="flex gap-[6px]">
              <CopyToClipboard text={account.accountNumber} onCopy={toast}>
                <button className="border border-[#CCCCCC] text-[#CCCCCC] text-md py-[9px] px-2">복사하기</button>
              </CopyToClipboard>
              {account.kakao && (
                <Link className="bg-[#f8c93b] text-white text-md px-2 py-[9px]" href={account.kakao}>
                  카카오페이
                </Link>
              )}
            </div>
          </div>
        ))}
      <div
        className={`fixed top-full left-[50%] translate-x-[-50%] duration-300 ${toasted ? ' translate-y-[-80px]' : ''}`}
      >
        <p className="h-[32px] px-3 w-fit bg-[#FA4A0C] text-white text-md flex items-center rounded-[6px]">
          계좌번호가 복사 되었습니다. &nbsp;&nbsp;&nbsp;X
        </p>
      </div>
    </div>
  );
}
