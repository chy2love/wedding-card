'use client';
import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
interface RsvpFormProps {
  companionCount?: number;
  companionName?: string;
  message?: string;
  name: string;
  phoneNumber: string;
  side: 'woman' | 'man' | '';
  willAttend: 'true' | 'false' | '';
  willEat: 'true' | 'false' | '';
}
export function RsvpForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RsvpFormProps>({ mode: 'onChange' });
  const watching = watch();
  const [toasted, setToasted] = useState<boolean>(false);
  const onSubmit = async (value: any) => {
    console.log(' => ', value);
    const response = await fetch(`/api/dynamic/rsvp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });
    if (response.status === 200) {
      toast();
    } else {
      alert('참석여부 전달에 실패했습니다.');
    }
  };
  const toast = () => {
    if (toasted) return;
    setToasted(true);
    setTimeout(() => {
      setToasted(false);
    }, 3000);
  };
  const getValidation = () => {
    if (!watching.name || watching.name.length === 0) {
      return false;
    }
    if (!watching.side || watching.side.length === 0) {
      return false;
    }
    if (watching.willAttend === '') {
      return false;
    }
    if (!watching.phoneNumber || watching.phoneNumber.length === 0 || !/^(010|011)\d{8}$/.test(watching.phoneNumber)) {
      return false;
    }
    if (watching.willEat === '') {
      return false;
    }
    return true;
  };
  return (
    <div className="w-full h-[calc(100%-71px)] px-5">
      {/* 신랑 신부측 */}
      <Controller
        control={control}
        name="side"
        rules={{ required: '신랑, 신부측을 선택해 주세요.' }}
        render={({ field: { value, onChange } }) => (
          <div className="h-9 flex gap-[10px] mb-[30px]">
            <div
              onClick={() => onChange('man')}
              className={`text-md border-[#D9D9D9] border text-[#9A9A9D] p-[11px] w-[calc(50%-5px)] ${value === 'man' ? 'border-black font-bold text-black' : ''}`}
            >
              🤵‍♂️️ 신랑측
            </div>
            <div
              onClick={() => onChange('woman')}
              className={`text-md border-[#D9D9D9] border text-[#9A9A9D] p-[11px] w-[calc(50%-5px)] ${value === 'woman' ? 'border-black font-bold text-black' : ''}`}
            >
              👰‍♀️ 신부측
            </div>
          </div>
        )}
      />
      {errors.side && <p className="mt-2 text-sm text-red-500">{errors.side.message}</p>}
      {/* 참석여부 */}

      <div className="mb-[30px]">
        <p className="mb-[6px]  text-md text-[#666667] asterisk">참석 여부</p>
        <Controller
          control={control}
          name="willAttend"
          rules={{ required: '참석여부를 선택해 주세요.' }}
          render={({ field: { value, onChange } }) => (
            <div className="h-9 flex gap-[10px] ">
              <div
                onClick={() => onChange('true')}
                className={`text-md border-[#D9D9D9] border text-[#9A9A9D] p-[11px] w-[calc(50%-5px)] ${value === 'true' ? 'border-black font-bold text-black' : ''}`}
              >
                참석 가능
              </div>
              <div
                onClick={() => onChange('false')}
                className={`text-md border-[#D9D9D9] border text-[#9A9A9D] p-[11px] w-[calc(50%-5px)] ${value === 'false' ? 'border-black font-bold text-black' : ''}`}
              >
                참석 불가
              </div>
            </div>
          )}
        />
        {errors.willAttend && <p className="mt-2 text-sm text-red-500">{errors.willAttend.message}</p>}
      </div>
      {/* 성함 */}
      <div className="mb-[30px]">
        <p className="mb-[6px]  text-md text-[#666667] asterisk">성함</p>
        <input
          type="text"
          className={`${watching.name ? (watching.name?.length !== 0 ? 'border-black' : '') : ''} focus:border-black focus:text-black w-full h-[29px] placeholder:text-[#D0D0D0] placeholder:text-lg pb-1 border-b-2 border-[#D9D9D9] `}
          placeholder="입력해주세요"
          {...register('name', { required: '성함을 입력해 주세요.' })}
        />
        {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
      </div>
      {/* 연락처 */}
      <div className="mb-[30px]">
        <p className="mb-[6px]  text-md text-[#666667] asterisk">연락처</p>
        <input
          type="text"
          className={`${watching.phoneNumber ? (watching.phoneNumber?.length !== 0 ? 'border-black' : '') : ''} focus:border-black focus:text-black w-full h-[29px] placeholder:text-[#D0D0D0] placeholder:text-lg pb-1 border-b-2 border-[#D9D9D9]`}
          placeholder="01012345678"
          {...register('phoneNumber', {
            required: '연락처를 입력해 주세요.',
            pattern: { value: /^(010|011)\d{8}$/, message: '올바른 형식의 연락처를 입력해 주세요.' }
          })}
        />
        {errors.phoneNumber && <p className="mt-2 text-sm text-red-500">{errors.phoneNumber.message}</p>}
      </div>
      {/* 동행인원 */}
      <div className="mb-[30px]">
        <p className="mb-[6px]  text-md text-[#666667]">동행인원</p>
        <input
          type="number"
          className={`${watching.companionCount ? 'border-black' : ''} focus:border-black focus:text-black w-full h-[29px] placeholder:text-[#D0D0D0] placeholder:text-lg pb-1 border-b-2 border-[#D9D9D9]`}
          placeholder="0"
          {...register('companionCount')}
        />
      </div>
      {/* 동행인 성함 */}
      <div className="mb-[30px]">
        <p className="mb-[6px]  text-md text-[#666667]">동행인 성함</p>
        <input
          type="text"
          className={`${watching.companionName ? (watching.companionName?.length !== 0 ? 'border-black' : '') : ''} focus:border-black focus:text-black w-full h-[29px] placeholder:text-[#D0D0D0] placeholder:text-lg pb-1 border-b-2 border-[#D9D9D9]`}
          placeholder="입력해주세요"
          {...register('companionName')}
        />
      </div>
      {/* 식사여부 */}
      <div className="mb-[30px]">
        <p className="mb-[6px]  text-md text-[#666667] asterisk">식사 여부</p>
        <Controller
          control={control}
          name="willEat"
          rules={{ required: '식사여부를 선택해 주세요.' }}
          render={({ field: { value, onChange } }) => (
            <div className="h-9 flex gap-[10px] ">
              <div
                onClick={() => onChange('true')}
                className={`${value === 'true' ? 'border-black font-bold text-black' : ''} text-md border-[#D9D9D9] border text-[#9A9A9D] p-[11px] w-[calc(50%-5px)]`}
              >
                식사 가능
              </div>
              <div
                onClick={() => onChange('false')}
                className={`${value === 'false' ? 'border-black font-bold text-black' : ''} text-md border-[#D9D9D9] border text-[#9A9A9D] p-[11px] w-[calc(50%-5px)]`}
              >
                식사 불가
              </div>
            </div>
          )}
        />
        {errors.willEat && <p className="mt-2 text-sm text-red-500">{errors.willEat.message}</p>}
      </div>
      {/* 특이사항 및 전달사항 */}
      <div className="mb-[30px]">
        <p className="mb-[6px]  text-md text-[#666667]">특이사항 및 전달사항</p>
        <textarea
          className={`${watching.message ? (watching.message?.length !== 0 ? 'border-black' : '') : ''} focus:border-black focus:text-black w-full h-[100px] placeholder:text-[#D0D0D0] placeholder:text-lg py-2 border-t-2 border-b-2 border-[#D9D9D9] rounded-none resize-none`}
          placeholder="입력해주세요"
          {...register('message')}
        />
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        disabled={!getValidation()}
        className={`${getValidation() ? 'border-black text-black' : ''} mb-10 w-full h-10 text-[#9A9A9D] text-md font-bold border border-[#9A9A9D] rounded-[8px]`}
      >
        참석여부 전달
      </button>
      <div
        className={`fixed top-full left-[50%] translate-x-[-50%] duration-300 ${toasted ? ' translate-y-[-80px]' : ''}`}
      >
        <p className="h-[32px] px-3 w-fit bg-text-pink text-white text-md flex items-center rounded-[6px]">
          참석 여부가 전달되었습니다. &nbsp;&nbsp;&nbsp;X
        </p>
      </div>
    </div>
  );
}
