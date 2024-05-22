import React from 'react'
import './page.css'
import Image from 'next/image'
import one from './Images/blog-1.webp'
import two from './Images/blog-2.webp'
import three from './Images/blog3.webp'
import four from './Images/blog-4.webp'
import five from './Images/blog-5.webp'
import six from './Images/blog-6.webp'
import seven from './Images/blog-7.webp'
import eight from './Images/blog-8.webp'

const page = () => {
  return (
    <div>
        <div className='one'>
            <div>
              <h1 className='text-4xl py-4 mt-7'>Welcome to Klas Blog</h1>
              <p className='text-xl font-light pb-7'>Updates and announcement from Klas team</p>
            </div>

           <form>
             <div className='flex mt-3 gap-3'>
                  <input className='text-black rounded-sm w-80 p-1.5' type="email" placeholder='Enter your email' required />
                  <button className='bg-blue-700 p-1.5 px-3 rounded-sm cursor-pointer'>subscribe</button>
              </div>
            </form>

            <div>
                <p className='text-sm mr-12 mt-2 pb-20 cursor-pointer'>Enter your email to get the latest news from the Klas team</p>
            </div>

        </div>  

        <div className="flex gap-28 mt-16">
            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={one} alt='' />

                <p className='text-sm mt-2'>May 4, 2024</p>

                <h1 className='text-xl'>6 Ways to Get Students <br /> Feedback to Refine and <br /> Optimise Your Online Classes</h1>
            </div>

            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={two} alt='' />

                <p className='text-sm mt-2'>April 25, 2024</p>

                <h1 className='text-xl'>Setting Smart Goals as an <br /> Online Teacher</h1>
            </div>

            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={three} alt='' />

                <p className='text-sm mt-2'>April 13, 2024</p>

                <h1 className='text-xl'>Excelling as an Online Teacher</h1>
            </div>
        </div>

        <div className="flex gap-28 mt-16">
            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={four} alt='' />

                <p className='text-sm mt-2'>April 5, 2024</p>

                <h1 className='text-xl'>6 Effective Ways to Promote <br />Your Online Class</h1>
            </div>

            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={five} alt='' />

                <p className='text-sm mt-2'>May 24, 2024</p>

                <h1 className='text-xl'>Tips & Ideas for Virtual<br /> Classroom management</h1>
            </div>

            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={six} alt='' />

                <p className='text-sm mt-2'>May 13, 2024</p>

                <h1 className='text-xl'>Ready, Set, Teach: Your <br /> Comprehensive Online<br /> Teaching Starter Kit</h1>
            </div>
        </div>

        <div className="flex gap-28 mt-16">
            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={seven} alt='' />

                <p className='text-sm mt-2'>Febuary 28, 2024</p>

                <h1 className='text-xl'>Make Money Online in 2024</h1>
            </div>

            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={eight} alt='' />

                <p className='text-sm mt-2'>Febuary 13, 2024</p>

                <h1 className='text-xl'>Our First Blog Post is Here</h1>
            </div>

            <div>
                <Image className='rounded-sm cursor-pointer' height={190} src={two} alt='' />

                <p className='text-sm mt-2'>April 7, 2024</p>

                <h1 className='text-xl'>5 Effective Ways to Promote <br />Our Website</h1>
            </div>

        </div>
      
    </div>
  )
}

export default page
