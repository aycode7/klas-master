'use client'
import React from 'react'
import { useState } from 'react'

import logo from './dashimages/klas-logo.svg'
import Image from 'next/image'
import profile from  './dashimages/image.webp'

import { BiSolidHomeCircle } from "react-icons/bi";
import { RiRecordCircleFill } from "react-icons/ri";
import { AiFillContainer } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { PiTrashSimpleFill } from "react-icons/pi";
import { IoTriangle } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

const NavbarSection = () => {
        const[Section1, setSection1] =useState(true)
        const[Section2, setSection2] =useState(false)
        const[Section3, setSection3] =useState(false)
        const[Section4, setSection4] =useState(false)
        const[Section5, setSection5] =useState(false)
        const[Drop, setDrop] = useState(false)
        const[Color, setColor] = useState(true)
        const[Color2, setColor2] = useState(false)
        const[Color3, setColor3] = useState(false)

      const showSection1 = () => {
        setSection1(true)
        setSection2(false)
        setSection3(false)
        setSection4(false)
        setSection5(false)
      }

      const showSection2 = () => {
        setSection1(false)
        setSection2(true)
        setSection3(false)
        setSection4(false)
        setSection5(false)
      }

      const showSection3 = () => {
        setSection1(false)
        setSection2(false)
        setSection3(true)
        setSection4(false)
        setSection5(false)
      }

      const showSection4 = () => {
        setSection1(false)
        setSection2(false)
        setSection3(false)
        setSection4(true)
        setSection5(false)
      }

      const showSection5 = () => {
        setSection1(false)
        setSection2(false)
        setSection3(false)
        setSection4(false)
        setSection5(true)
      }

      const showDrop = () => {
        setDrop(!Drop)
      } 

      const showColor = () => {
        setColor(true)
        setColor2(false)
        setColor3(false)
      } 

       const showColor2 = () => {
        setColor(false)
        setColor2(true)
        setColor3(false)
      }

       const showColor3 = () => {
        setColor(false)
        setColor2(false)
        setColor3(true)
      }

  return (
    <div className='font-dmsans'> 
      <nav className='hidden lg:mx-8 lg:flex lg:text-white lg:font-bold lg:text-sm lg:my-8'>
          <div className='flex items-center'>
            <Image className='h-16 w-16' src={logo} />
            <h1 className='text-blue-600 text-3xl'>Klas</h1>
          </div>
          <div className='ml-auto flex items-center gap-4'>
            <p className='text-blue-600 boder-solid border py-3 px-8 rounded-lg border-blue-500'>Try Pro</p>
            <p className='px-10 py-3 bg-blue-600 rounded-lg font-sans'>Create a content</p>
            <Image className='rounded-full h-10 w-10' src={profile} />
          </div>
      </nav>


      <section className='pt-1 px-2 md:px-8 lg:mx-8 rounded-lg font-dmsans bg-blue-600 text-white md:pt-12  '>
        <div className=''>
          <h1 className='hidden lg:block lg:text-4xl lg:font-semibold lg:text-center lg:font-sans'>What will you teach today?</h1>
          <p className='text-center text-black md:my-6 md:block flex items-center gap-2 justify-center mt-8'><input className='md:pr-96 md:pl-3 md:py-2 py-2 pl-6 rounded-lg' type="text" placeholder='Search for your content' /> <Image className='md:hidden rounded-full h-10 w-10' src={profile} /></p>
        </div>
        <div className='flex justify-between md:justify-center md:gap-24 gap py-6 mx-2 '>
            <div onClick={showSection1} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section1===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><BiSolidHomeCircle /></p>
              <p className='font-sans text-sm font-normal'>Home</p>
              {Section1===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection2} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section2===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><AiFillContainer /></p>
              <p className='font-sans text-sm font-normal'>Content</p>
              {Section2===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection3} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section3===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><RiRecordCircleFill /></p>
              <p className='font-sans text-sm font-normal'>Recordings</p>
              {Section3===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection4} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section4===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'} ><PiTrashSimpleFill /></p>
              <p className='font-sans text-sm font-normal'>Resources</p>
              {Section4===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection5} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section5===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><FaUser /></p>
              <p className='font-sans text-sm font-normal'>Settings</p>
              {Section5===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
        </div>
          
      </section>

      {Section1===true ? ( <section className='px-2 md:px-8 lg:mx-2 relative'>
              <div className='hidden lg:block pt-8'>
                    <div className='grid grid-cols-2 pb-8 gap-4'>
                        <div className='flex gap-8 bg-white-200 py-6 px-8 rounded-lg shadow-xl '>
                        <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                        <div>
                        <h1 className='text-lg'>Total Students</h1>
                        <h1 className='text-4xl font-bold'>0</h1>
                        </div>
                    </div>
                    <div className='flex gap-8 bg-white-200 py-6 px-8 rounded-lg shadow-xl '>
                        <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                        <div>
                        <h1 className='text-lg'>Total Students</h1>
                        <h1 className='text-4xl font-bold'>0</h1>
                        </div>
                    </div>
                   </div>
                    <div className='flex gap-8 bg-white-200 py-6 px-8 rounded-lg shadow-xl '>
                        <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                        <div>
                        <h1 className='text-lg'>Total Students</h1>
                        <h1 className='text-4xl font-bold'>0</h1>
                        </div>
                    </div>
              </div>

              <div className='flex items-center lg:mt-8 pt-8 pb-44'>
                <p className='font-semibold text-xl'>Recent Classes</p>
                <p onClick={showDrop} className='ml-auto flex items-center gap-12 shadow-md px-4 py-2 rounded-lg'>Classes <RiArrowDropDownLine/> </p>
              </div>

              {Drop===false ? '' : <div className='flex flex-col absolute bottom-4 right-0 text-lg font-semibold bg-white-200 rounded-lg'>
                <p onClick={showColor} className=  {Color===true ? ('pl-12 pr-20 py-3 bg-sky-200 text-center') : ('pl-8 pr-20 py-3  text-center')} > Classes </p>
                <p onClick={showColor2} className=  {Color2===false ? ('pl-8 pr-20 py-3 text-center') : ('pl-12 pr-20 py-3 bg-sky-200 text-center')}> Ebooks </p>
                <p onClick={showColor3} className=  {Color3===false ? ('pl-8 pr-20 py-3 text-center') : ('pl-12 pr-20 py-3 bg-sky-200 text-center')}>Courses</p>
              </div>}
              </section>) : '' }

            {Section2===true ? <section className='px-2 md:px-8 lg:mx-2 relative'>
                <div className='flex items-center lg:mt-8 pt-8 pb-44'>
                        <p className='font-semibold text-xl'>My Content</p>
                        <p onClick={showDrop} className='ml-auto flex items-center gap-12 shadow-md px-4 py-2 rounded-lg'>Classes <RiArrowDropDownLine/> </p>
                </div>

              </section>: ''}

              {Section3===true ? <section className='px-6 md:px-8 lg:mx-2 relative'>
                <div className='flex items-center lg:mt-8 pt-12 pb-4'>
                        <p className='font-semibold md:text-xl text-lg'>Class recordings</p>
                        <p onClick={showDrop} className='ml-auto shadow-md md:pl-44 pl-16 text-xl md:pr-6 pr-2 md:py-4 py-4 boder-solid border rounded-lg'> <RiArrowDropDownLine/> </p>
                  </div>



              </section>: ''}


             {Section4===true ? <section className='px-6 md:px-8 lg:mx-2 relative'>
                          <div className='lg:mt-8 pt-12 pb-4'>
                                <p className='font-semibold text-xl '>Resource library</p>
                          </div>
                                
                          <div className='flex items-center'>
                                <p onClick={showDrop} className='shadow-md md:pl-44 pl-24 text-xl md:pr-6 pr-2 md:py-4 md:py-2 py-4 boder-solid border rounded-lg'> <RiArrowDropDownLine/> </p>
                                  <button className='ml-auto px-6 md:py-2 py-4 bg-blue-700 text-white cursor-pointer rounded-lg'> Upoad Link </button>
                          </div>         
             </section>: ''}


            {Section5===true ? <section className='grid md:grid-cols-5 py-16 md:mx-8 mx-2'>

                <div  className=' md:col-span-1 flex gap-4 pb-8 px-4 border-b border-solid border-gray-2'>
                    <Image className='rounded-full h-10 w-10' src={profile} alt='user image'/>
                    <div className=''>
                    <p className='font-semibold text-md'>Bright Igwe</p>
                     <p className='text-slate-600 text-sm font-sans'>topkidz02@gmail.com</p>
                    </div>
                </div>

                <div className=' hidden md:block md:col-span-4 border-l border-solid border-gray-4 px-6'>
                    <div >
                      <h1 className='flex items-center text-blue-800 text-xl font-semibold'> <span className='mr-6'><FaAngleRight/> </span> Your Profile</h1>
                    </div>
                </div>
            </section> : ''}

    </div>
  )
}

export default NavbarSection
