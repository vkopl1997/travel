import React from 'react'

export const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/13540729/pexels-photo-13540729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4  '>
                <p>All Inclusive</p>
                <h2 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h2>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum? Harum nemo eius beatae molestias cupiditate unde odio corrupti ducimus. </p>
                <button className='bg-white text-black '>Reserve Now</button>
            </div>
        </div>
    </div>

  )
}
