import Image from 'next/image';
import React from 'react';
import loader from '../public/spinner.gif';

const Loader = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={loader} alt='loading..' />
    </>
  );
};

export default Loader