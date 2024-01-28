import { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(10); // convenção: se começa com 'use' é hook

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => {
      console.log('Timer desmontado'); // desmontar o componente é necessário para evitar memory leak
      clearInterval(interval);
    }
  });

  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}
