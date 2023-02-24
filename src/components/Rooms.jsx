import React from 'react'

export const Rooms = () => {
  return (
    <div className='max-w-[1440px] h-[500px] mx-auto bg-blue-100 pt-16 lg:mb-[20%] md:mb-[35%]
    px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2 '>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem, ipsum dol sit amet consectetur adipisicing elit. Vitae itaque commodi aliquam vel voluptate eaque.</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className=' row-span-2 object-cover w-full h-full'  src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='object-cover w-full h-full'  src="https://images.pexels.com/photos/4577385/pexels-photo-4577385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
    </div>
  )
}
