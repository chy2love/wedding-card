'use client';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
export default function Test() {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });
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
  const deleteData = async () => {
    const response = await fetch('/api/test/6642d80593b67a604a078681', {
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
      <input className="text-black" type="text" {...register('title')} />
      <input className="text-black" type="text" {...register('content')} />
      <button onClick={handleSubmit((value) => setData(value))}>저장</button>
      <button onClick={deleteData}>삭제</button>
    </div>
  );
}
