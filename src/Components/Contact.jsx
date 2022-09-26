import React from 'react'
import {motion} from 'framer-motion'
function Contact() {
  return (
    <div>
        <motion.h2 initial={{y:-1000,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.2,delay:2}} className='mt-16 text-purple-800 p-6	text-6xl font-bold sm:text-center sm:text-5xl xl:text-start xl:text-6xl m:text-4xl'>Contact Us</motion.h2>

<section className=' rounded-3xl border-indigo-400  m-auto flex flex-col w-1/2 mb-8 mt-7 sm:w-full xl:w-3/4 m:w-full' >
  <div className=' flex items-center flex-col gap-3'>
    <input type="text" placeholder="Enter your Name"  className=' bg-slate-200 w-3/4 p-6 mt-7 rounded-2xl'/>
    <input type="email" placeholder="Enter your Email" className=' bg-slate-200 w-3/4 p-6 mt-7 rounded-2xl'/>
    <input type="text" placeholder="Enter the subject" className=' bg-slate-200 w-3/4 p-6 mt-7 rounded-2xl'/>
    <textarea
    className=' bg-slate-200 w-3/4 p-6 mt-7 rounded-2xl'
      name=""
      id=""
      cols="30"
      rows="5"
      placeholder="Your Message"
    ></textarea>
    <motion.button whileHover={{scale:1.2,}} transition={{duration:0.4,type:'spring', stiffness: 400}} className='bg-blue-600 w-1/3 p-4 rounded-full text-white hover:bg-blue-800 text-lg  mb-7 mt-7'>Submit</motion.button>
  </div>
</section>

    </div>
  )
}

export default Contact