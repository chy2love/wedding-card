'use client';
import { useState, useRef, useEffect } from 'react';
export default function Admin() {
  const [auth, setAuth] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const [rsvp, setRsvp] = useState<any>([]);
  const submit = () => {
    if (ref.current?.value === '7089') {
      setAuth(true);
    }
  };
  useEffect(() => {
    if (auth) {
      getRsvp();
    }
    return () => {};
  }, [auth]);
  const getRsvp = async () => {
    const response = await fetch(`/api/dynamic/rsvp`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setRsvp(data.data);
    }
  };
  return (
    <div>
      {auth ? (
        <div className="p-5">
          {rsvp.map((rsvp: any, index: number) => (
            <div key={index}>
              <span className="mr-4">{rsvp.name}</span>
              <span className="mr-4">{rsvp.phoneNumber}</span>
              <span className="mr-4">{rsvp.side}</span>
              <span className="mr-4">{rsvp.willAttend}</span>
              <span className="mr-4">{rsvp.willEat}</span>
              <span className="mr-4">{rsvp.companionName}</span>
              <span className="mr-4">{rsvp.companionCount}</span>
              <span className="mr-4">{rsvp.message}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-5">
          <input ref={ref} placeholder="코드 입력" />
          <button onClick={submit}>입력하기</button>
        </div>
      )}
    </div>
  );
}
