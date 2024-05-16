'use client'
import React from 'react'
import Image from 'next/image'
import slide1 from '../Images/slide-1.svg'
import './page.css'
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

            <div className='flex-column justify-center px-40 py-20 align-center'>
                <span className='flex-column text-center'>
                    <h1 className='text-blue-800 text-3xl font-bold'>Get started with Klas</h1>
                    <p className='text-gray-500 text-2sm font-sans'>Sign Up to discover the full power of klas</p>
                </span>

                <span className='p-2'>
                    <p className='font-sans text-lg cursor-pointer'><span className='font-bold'>√</span> Launch your virtual academy</p>
                    <p className='font-sans mt-5 text-lg cursor-pointer'><span className='font-bold'>√</span> Host engaging classes with ease</p>
                    <p className='font-sans mt-5 text-lg cursor-pointer'><span className='font-bold'>√</span> No teaching experience? No problem!</p>
                </span>
                
                <span className=''>
                    <p className=' mt-12 login'>Login</p>
                    <p className='mt-8 create'>Create an account</p>
                </span>
            </div>
        </div>
      
    </div>
  )
}

export default page
