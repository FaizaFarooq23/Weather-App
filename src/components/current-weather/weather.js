import React from 'react'

export default function Weather({data}) {
  return (
    <div className='rounded-[10px] mt-2 divbackground'>
      <div className='ml-3 px-4 py-2 '>
        <div className='flex justify-between items-center'>
          <div className='text-lg'>
            <p className=' font-semibold '>{data.city}</p>
            <p className=' font-medium'>{data.weather[0].description}</p>
          </div>
          <img className='inline-block  w-24' src={`icons/${data.weather[0].icon}.svg`} alt='weather' />
        </div>
        <div className='flex-col justify-start items-center  py-2'>
          <div className='flex justify-between pr-24'>
            <div>
              <p className=' text-5xl font-bold'>{Math.round(data.main.temp)}°C</p>
            </div>
            <div>
              <p >Feels Like</p>
              <p className=' font-semibold'>{Math.round(data.main.feels_like)}°C</p>
            </div>
            <div>
              <p>Wind</p>
              <p className=' font-semibold'>{data.wind.speed} m/s</p>
            </div>
            <div>
              <p>Humidity</p>
              <p className=' font-semibold'>{data.main.humidity}%</p>
            </div>
            <div><p>Pressure</p>
              <p className=' font-semibold'>{data.main.pressure} hPa</p> </div>
          </div>
        </div>
      </div>

    </div>
  )
}
