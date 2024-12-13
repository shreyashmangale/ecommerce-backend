import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-slate-700 grid lg:grid-cols-4 md:grid-cols-2 text-center grid-cols-1 border-t-2 sm:px-32 px-2 py-12 gap-2'>
            <div className='flex flex-col gap-4 p-8 justify-center items-center'>
                <div className='w-fit bg-red-500 px-4 py-2 rounded-full'>
                    <h1 className='text-xl text-white'>GetItNow</h1>
                </div>
                <h1 className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias laboriosam ex dolore officiis eaque impedit.</h1>
                <div className='flex md:flex-row flex-col border-2 border-gray-500 rounded p-4 gap-4'>
                    <div>
                    <FontAwesomeIcon icon={faPhone} size='2xl' color='palegreen' />
                    </div>
                    <div>
                        <h1 className='text-gray-400'>Got Question? Call us 24/7 <br /> <span className='text-2xl text-blue-500'>+0123 456 789</span></h1>
                    </div>
                </div>

            </div>
            <div className='flex flex-col gap-6 justify-start p-8'>
                <h1 className='text-xl text-slate-300 font-bold'>Useful Links</h1>
                <div className='flex flex-col gap-1 text-lg text-gray-400'>
                    <h1>About</h1>
                    <h1>Our Services</h1>
                    <h1>How to shop on</h1>
                    <h1>FAQ</h1>
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className='flex flex-col gap-6 justify-start p-8'>
                <h1 className='text-xl text-slate-300 font-bold'>Customer Service</h1>
                <div className='flex flex-col gap-1 text-lg text-gray-400'>
                    <h1>Payment Methods</h1>
                    <h1>Money-back Guarantee!</h1>
                    <h1>Returns</h1>
                    <h1>Shipping</h1>
                    <h1>Terms and conditions</h1>
                    <h1>Privacy policy</h1>
                </div>
            </div>
            <div className='flex flex-col gap-6 justify-start p-8'>
                <h1 className='text-xl text-slate-300 font-bold'>My Account</h1>
                <div className='flex flex-col gap-1 text-lg text-gray-400'>
                    <h1>Sign In</h1>
                    <h1>View Cart</h1>
                    <h1>My Wishlist</h1>
                    <h1>Track My Order</h1>
                    <h1>Help</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer