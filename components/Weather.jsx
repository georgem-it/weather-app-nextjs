import Image from 'next/image';
import React from 'react'

const Weather = ({ data }) => {
  console.log(data)
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[75vh] m-auto p-4 text-gray-300 z-10'>
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='icon'
            width='100'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0)} &#176;C</p>
      </div>

      <div className='bg-black/75 relative p-8 rounded-md'>
        <p className='text-2xl text-center pb-6'>Weather in {data.name}, {data.sys.country}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)} &#176;C</p>
            <p className='text-xl'>Feels like</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{data.main.humidity.toFixed(0)}%</p>
            <p className='text-xl'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{((data.wind.speed)*3.6).toFixed(0)} km/h</p>
            <p className='text-xl'>Wind</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Weather