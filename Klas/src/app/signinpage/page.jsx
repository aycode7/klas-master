'use client'
import React from 'react'
import './page.css'
import Image from 'next/image'
import slide1 from './Images/slide-1.svg'
import { useState } from 'react'

const page = () => {

    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const handleShow1 = () => {
        setShow1(true)
        setShow2(false)
        setShow3(false)

    }

    const handleShow2 = () => {
        setShow1(false)
        setShow2(true)
        setShow3(false)

    }

    const handleShow3 = () => {
        setShow1(false)
        setShow2(false)
        setShow3(true)

    }

  return (
    // Newest  commit here
    
    <div>
        <div className='flex fixed'>
            <div className='px-24 py-3 bg-blue-800'>
                <Image src={slide1} alt='' />

                <span className='flex-column justify-center text-center align-center'>
                    <h1 className='text-white text-3xl'>Deliver an unforgettable experience</h1>
                    <p className='text-lg mt-2 text-white font-sans'>Host all types of classss and sizez on Klas</p>
                </span>

                <span className='btn'>
                <p onClick={handleShow1} className={show1 === true ? ('gray') : ''}>⨀</p>
                <p onClick={handleShow2} className={show2 === true ? ('gray') : ''}>⨀</p>
                <p onClick={handleShow3} className={show3 === true ? ('gray') : ''}>⨀</p>
                </span>
            </div>

            <div className='flex-column px-10 py-12'>
                <h1 className='text-blue-700 text-3xl'>Sign In</h1>

                <form>
                    <div className='p-30 mt-14'>
                      <p className='mt-8 font-sans text-lg'>Email Address</p>

                      <div>
                        <input className='bg-blue-200 font-sans mt-3 rounded-sm p-3' type="email" placeholder='Enter Your Email' required />
                      </div>
                    </div>

                    <div className='mt-8'>
                      <p className='mt-8 font-sans text-lg'>Password</p>

                      <div>
                        <input className='bg-blue-200 font-sans mt-3 rounded-sm p-3' type="password" placeholder='Enter Your Password' required />
                      </div>
                    </div>

                    <div className='check'>
                      <span className='left'>
                        <p className='mt-4 w-28'>Remember me</p>
                    
                        <span>
                          <input className='tick' type="checkbox" />
                        </span>

                      </span>

                      <span className='right'>
                        <p className='cursor-pointer'>Forgot Password</p>

                      </span>
                    </div>

                    <div className='btn'>
                      <button id='btn' className='bg-blue-700 font-bold p-3 mt-10 px-40 text-white font-sans cursor-pointer rounded-sm'>Continue</button>
                    </div>
                    
                </form>

            </div>

            
        </div>
      
    </div>
  )
}

export default page
