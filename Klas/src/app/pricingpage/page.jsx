'use client'
import React from 'react'
import './page.css'
import Image from 'next/image'
import { useState } from 'react'
import crown from './Images/crown.svg'

const page = () => {
  return (
    <div>
        <div className="one">
            <h1 className='text-white text-5xl font-monospace pt-64 pb-24 font-bold'>Set up your virtual academy today</h1>
        </div>

        <div className='two'>

            <div className='ctn-1'>
                <div className='flex-column gap-3 p-3 justify-center text-center'>
                  <div>
                    <h1 className='font-bold text-black text-3xl pt-8 pb-7'>Free</h1>
                  </div>

                  <div>
                    <p className='text-gray-500 text-sm font-serif'>Everything you need to start teaching online</p>
                  </div>

                  <div className='flex justify-center pt-9'>
                    <h1 className='text-3xl'>$0</h1>
                    <p className='text-sm mt-2 text-gray-500 font-serif'>/month</p>
                  </div>

                  <div>
                    <button className='btn-1'>Try For Free</button>
                  </div>

                </div>

                <div className='text-1'>
                    <p className='flex gap-3'> <span className='text-blue-800 font-sans font-bold'>√</span> 5% transaction fee</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Sell ebooks</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Unlimited ebooks</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Unlimited students per ebook</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Sales page for enrolments</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Sell recorded versions</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Unlimited courses</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Unlimited students per course</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Sales page for enrolment</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Accept payments online</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Built-in chart room</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Analytics & attendance tracking</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Student dashboard</p>



                </div>
            </div>

            <div className='ctn-2'>
                <div className='flex-column gap-3 p-3 justify-center text-center'>
                  <div className='crownctn'>
                    <Image src={crown} className='crown' alt='' />
                    <h1 className='font-bold text-black text-3xl'>Pro</h1>
                  </div>

                  <div>
                    <p className='text-gray-500 text-sm font-serif'>Everything you need to start teaching online</p>
                  </div>

                  <div className='flex justify-center pt-9'>
                    <h1 className='text-3xl'>$29</h1>
                    <p className='text-sm mt-2 text-gray-500 font-serif'>/month</p>
                  </div>

                  <div>
                    <button className='btn-2'>Get Started</button>
                  </div>

                </div>

                <div className='text-2'>

                    <div className='flex justify-center'>
                        <p className='font-bold'>Everythin in Free, including</p>
                    </div>

                    <p className='flex gap-3'> <span className='text-blue-800 font-sans font-bold'>√</span> 3% transaction fee</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Host unlimited classes</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Host up to 100 students per class</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Instant recording & cloud storage</p>
                    <p className='flex gap-3 ml-2'> <span className='font-bold text-sm'>⨀</span> Time limit is 2 hours</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Custom branding</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Integrated email marketing</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> 5 admin & instructor seats</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Team reports & analytics</p>



                </div>
            </div>

            <div className='ctn-1'>
                <div className='flex-column gap-3 p-3 justify-center text-center'>
                  <div>
                    <h1 className='font-bold text-black text-3xl pt-8 pb-7'>Plus</h1>
                  </div>

                  <div>
                    <p className='text-gray-500 text-sm font-serif'>Take your Klas academy to the next level</p>
                  </div>

                  <div className='flex justify-center pt-9'>
                    <h1 className='text-3xl'>$99</h1>
                    <p className='text-sm mt-2 text-gray-500 font-serif'>/month</p>
                  </div>

                  <div>
                    <button className='btn-1'>Coming Soon</button>
                  </div>

                </div>

                <div className='text-1'>

                    <div className='flex justify-center'>
                        <p className='font-bold'>Everything in Pro, including</p>
                    </div>

                    <p className='flex gap-3'> <span className='text-blue-800 font-sans font-bold'>√</span> 0% transaction fee</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Affiliate marketing</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Live chat support</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Public API access</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Unlimited admin & instructor seats</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Run multiple academies in one account</p>
                    <p className='flex gap-3'> <span className='text-blue-800 font-bold font-sans'>√</span> Custom domain</p>

                </div>
            </div>
        </div>

        <div className="three">
            <div className='flex justify-center font-bold text-5xl pb-24'>
                <h1 className=''>Frequently asked questions</h1>
            </div>

            <div className='sec-1'>
                <div id='line2' className='flex p-5 cursor-pointer'>
                    <div>
                      <h2 className='text-lg font-bold mt-2'>Can I cancel my account at any time?</h2>
                      <p className='text-gray-500 mt-4 hidden'>Yes, if you ever decide Klas isn't the best teaching platform for your needs, simply cancel your account.</p>
                    </div>

                    <div className='ml-auto'>
                        <p id='down' className='text-3xl mt-2'>▾</p>
                        <p id='up' className='text-3xl hidden mt-2'>▴</p>
                    </div>
                </div>

                <div id='line' className='flex p-5 cursor-pointer'>
                    <div>
                      <h2 className='text-lg font-bold mt-2'>Can I change my plan later on?</h2>
                      <p className='hidden text-gray-500 mt-4'>Absolutely, you can upgrade or downgrade your plan at any time.</p>
                    </div>

                    <div className='ml-auto'>
                        <p id='down' className='text-3xl mt-2'>▾</p>
                        <p id='up' className='text-3xl hidden mt-2'>▴</p>
                    </div>
                </div>

                <div id='line' className='flex p-5 cursor-pointer'>
                    <div>
                      <h2 className='text-lg font-bold mt-2'>In what countries can I use Klas?</h2>
                      <p className='hidden text-gray-500 mt-4'>You can use Klas in nearly every country in the world</p>
                    </div>

                    <div className='ml-auto'>
                        <p id='down' className='text-3xl mt-2'>▾</p>
                        <p id='up' className='text-3xl hidden mt-2'>▴</p>
                    </div>
                </div>

                <div id='line' className='flex p-5 cursor-pointer'>
                    <div>
                      <h2 className='text-lg font-bold mt-2'>Are there any transaction fees on bookings?</h2>
                      <p className='hidden text-gray-500 mt-4'>Yes, we charge a transaction fee on bookings depending on your plan. 10% booking fee on free plan, 3% fee on Pro, and 2% fee on Plus.</p>
                    </div>

                    <div className='ml-auto'>
                        <p id='down' className='text-3xl mt-2'>▾</p>
                        <p id='up' className='text-3xl hidden mt-2'>▴</p>
                    </div>
                </div>

                <div id='line' className='flex p-5 cursor-pointer'>
                    <div>
                      <h2 className='text-lg font-bold mt-2'>Is there a discount for Nonprofits?</h2>
                      <p className='hidden text-gray-500 mt-4'>Not yet, but we have that in our 2023 roadmap to launch Klas for Nonprofits. So you can look out for that.</p>
                    </div>

                    <div className='ml-auto'>
                        <p id='down' className='text-3xl mt-2'>▾</p>
                        <p id='up' className='text-3xl hidden mt-2'>▴</p>
                    </div>
                </div>

                <div id='line' className='flex p-5 cursor-pointer'>
                    <div>
                      <h2 className='text-lg font-bold mt-2'>How can I receive payouts from my classes?</h2>
                      <p className='hidden text-gray-500 mt-4'>We offer instant payouts to our creators. So the moment you start receiving bookings to a class, we pay out the earnings in less than 30 mins</p>
                    </div>

                    <div className='ml-auto'>
                        <p id='down' className='text-3xl mt-2'>▾</p>
                        <p id='up' className='text-3xl mt-2 hidden'>▴</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='four'>

            <div className='ctn'>
              <h1 className='mt-20 text-white text-5xl font-bold'>Ready to start teaching?</h1>
              <p className='text-gray-400 font-bold text-2xl font-monospace mt-5 pb-10'>Use klas to create and manage your onlinne academy</p>
              <button className='rounded-lg bg-white mb-12 text-blue-800 font-monospace font-bold text-lg py-4 px-12'>Sign up free</button>
            </div>

        </div>
      
    </div>
  )
}

export default page
