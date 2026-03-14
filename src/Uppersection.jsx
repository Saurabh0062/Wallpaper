import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Uppersection = () => {
  const [pageno, setpageno] = useState(Math.floor(Math.random() * 100));
  const [images, setimages] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${pageno}&limit=8`
      );
      setimages(res.data);
    })();
  }, [pageno]);

  return (
    <div className='flex flex-col justify-between gap-2'>
      <div className="h-[90vh] grid grid-cols-4 grid-rows-2 gap-4 p-4">
        {images.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      <div className='flex flex-row justify-center'>
        {/* prev button */}
        <button
          onClick={() => setpageno(prev => Math.max(prev - 1, 0))}
          className='bg-yellow-500 px-4 py-2 font-bold mx-7 rounded-2xl text-2xl active:scale-90 transition'>
          prev </button>
        {/* next button */}
        <button
          onClick={() => (setpageno(pageno + 1))}
          className='bg-yellow-500 px-4 py-2 font-bold mx-7 rounded-2xl text-2xl active:scale-90 transition'>
          next </button>
      </div>
    </div>
  )
}

export default Uppersection