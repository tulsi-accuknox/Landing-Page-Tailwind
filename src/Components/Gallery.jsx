import React from 'react'
import {motion} from 'framer-motion'
function Gallery() {
  return (
    <div>
        <h2 className='mt-16 text-blue-600 p-6	text-6xl font-bold sm:text-center sm:text-5xl xl:text-start xl:text-6xl m:text-4xl'>Our Gallery</h2>
        <section className='grid grid-cols-3 gap-9 p-8  sm:grid-cols-1 sm:p-10 lg:grid-cols-2 xl:grid-cols-3 m:grid-cols-1'>
          
              <motion.div initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,delay:1.1}}>
                <motion.img whileHover={{scale:1.1}} src="/img1.png" alt="" className='rounded-3xl	 '/></motion.div>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1.3}}>
                <motion.img whileHover={{scale:1.1}} src="/img2.png" alt="" className='rounded-3xl	 '/></motion.div>
              <motion.div initial={{x:1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,delay:1.1}}>
                <motion.img whileHover={{scale:1.1}} src="/img3.png" alt="" className='rounded-3xl	 '/></motion.div>
              <motion.div initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,delay:1.1}} >
                <motion.img whileHover={{scale:1.1}} src="/img4.png" alt=""className='rounded-3xl	 ' /></motion.div>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1.3}}>
                <motion.img whileHover={{scale:1.1}} src="/img5.png" alt="" className='rounded-3xl  '/></motion.div>
              <motion.div initial={{x:1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,delay:1.1}}>
                <motion.img whileHover={{scale:1.1}} src="/img6.png" alt="" className='rounded-3xl	 '/></motion.div>
              <motion.div initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,delay:1.1}}>
                <motion.img whileHover={{scale:1.1}} src="/img7.jfif" alt="" className='rounded-3xl	 '/></motion.div>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,delay:1.3}}>
                <motion.img whileHover={{scale:1.1}} src="/img8.png" alt=""className='rounded-3xl ' /></motion.div>
              <motion.div initial={{x:1000,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,delay:1.1}}>
                <motion.img whileHover={{scale:1.1}} src="/img9.png" alt="" className='rounded-3xl	 '/></motion.div>
        </section>

    </div>
  )
}

export default Gallery