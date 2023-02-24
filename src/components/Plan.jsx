import React from 'react'

export const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto px-4 py-16 grid lg:grid-cols-2 gap-4'> 
        {/* left */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover h-full w-full p-2' src="https://images.pexels.com/photos/14423245/pexels-photo-14423245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-2 object-cover h-full w-full p-2' src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-2 object-cover h-full w-full p-2' src="https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-3 object-cover h-full w-full p-2' src="https://images.pexels.com/photos/2171277/pexels-photo-2171277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='row-span-2 object-cover h-full w-full p-2' src="https://images.pexels.com/photos/127073/pexels-photo-127073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
        {/* right */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tempora vero praesentium laborum officia inventore iusto accusan</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo exercitationem autem, laboriosam fugit accusamus suscipit porro voluptatum. Placeat dolor velit vero molestias asperiores delectus tempore, ea impedit quia officiis neque. </p>
            <div>
          <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
          <button className='bg-black text-white hover:shadow-xl'>Book Your Trip</button>
        </div>
        </div>
        
    </div>
  )
}
