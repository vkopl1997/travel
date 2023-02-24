import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti'

export const Footer = () => {
  return (
    <div className='w-full mg-24 bg-gray-800 text-gray-300 px-2 py-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600
        py-8 px-4'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Travel</li>
                    <li className='py-1'>Bookin</li>
                    <li className='py-1'>Flights</li>
                    <li className='py-1'>Cruise</li>
                    <li className='py-1'>Ground</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Flights</li>
                    <li className='py-1'>Tours</li>
                    <li className='py-1'>Refunds</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Partners</li>
                    <li className='py-1'>Press</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legals</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                 <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                 <p className='py-4'>The latest deals, articles and resources  sent to your inbox weekly.</p>
                 <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 rounded-md mb-4' type="email" placeholder='Enter you mail...' />
                    <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                 </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1400px] px-2 py-4 justify-between mx-auto sm:flex-row text-center
        text-gray-500'>
            <p className='py-2'>2023 V.K All rights Reserved</p>
            <div className='flex justify-between sm:w-[300px] text-2xl '>
                <FaTwitter size={30} className='cursor-pointer m-2'/>
                <FaFacebook size={30} className='cursor-pointer m-2'/>
                <TiSocialPinterest size={30} className='cursor-pointer m-2'/>
                <FaInstagram size={30} className='cursor-pointer m-2'/>
            </div>
        </div>
    </div>
  )
}
