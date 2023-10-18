'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((response) => response.text())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="bg-blue-500 text-white p-4">
      <p className="text-2xl">Hello, Tailwind!</p>
      <p className="text-lg">{data}</p>
    </div>
  )
}