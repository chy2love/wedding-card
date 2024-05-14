'use client';
import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
export default function Test() {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });
  const [contentData, setContentData] = useState<
    { id: string; content: string; title: string; password: string }[] | null
  >(null);
  const getData = async () => {
    const response = await fetch('/api/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setContentData(data.data);
  };
  const setData = async (value: FieldValues) => {
    const response = await fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    }).then(() => getData());
  };
  const deleteData = async (id: string) => {
    const response = await fetch(`/api/test/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => getData());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {contentData?.map((data) => (
        <>
          <p>{data.title}</p>
          <p>{data.content}</p>
          <button onClick={() => deleteData(data.id)}>삭제</button>
        </>
      ))}
      <span>제목</span>
      <input className="text-black" type="text" {...register('title')} />
      <span>내용</span>
      <input className="text-black" type="text" {...register('content')} />
      <span>비밀번호</span>
      <input className="text-black" type="text" {...register('password')} />
      <button onClick={handleSubmit((value) => setData(value))}>저장</button>
    </div>
  );
}
