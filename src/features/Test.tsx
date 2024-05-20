'use client';
import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
export default function Test() {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' });
  const [password, setPassword] = useState<string>('');
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    });
    if (response.status === 200) {
      getData();
    } else if (response.status === 401) {
      alert('비밀번호가 틀렸습니다.');
    }
    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {contentData?.map((data) => (
        <div>
          <span className="mr-5">{data.title}</span>
          <span className="mr-4">{data.content}</span>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => deleteData(data.id)}>삭제</button>
        </div>
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
