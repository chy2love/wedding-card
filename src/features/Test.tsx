'use client';
import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
export default function Test() {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });
  const [contentData, setContentData] = useState<{ id: string; content: string; title: string }[] | null>(null);
  const getData = async () => {
    const response = await fetch('/api/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data.data);
  };
  const setData = async (value: FieldValues) => {
    const response = await fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    });
  };
  const deleteData = async (id: string) => {
    const response = await fetch(`/api/test/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
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
      <input className="text-black" type="text" {...register('title')} />
      <input className="text-black" type="text" {...register('content')} />
      <button onClick={handleSubmit((value) => setData(value))}>저장</button>
    </div>
  );
}
