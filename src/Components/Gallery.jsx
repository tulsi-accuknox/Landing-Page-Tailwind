import React from 'react'

function Gallery() {
  return (
    <div>
        <h2 className='mt-16 text-blue-600 p-6	text-6xl font-bold sm:text-center sm:text-5xl xl:text-start xl:text-6xl m:text-4xl'>Our Gallery</h2>
        <section className='grid grid-cols-3 gap-9 p-8  sm:grid-cols-1 sm:p-10 lg:grid-cols-2 xl:grid-cols-3 m:grid-cols-1'>
          
              <div><img src="/img1.png" alt="" className='rounded-3xl	hover:cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 '/></div>
              <div><img src="/img2.png" alt="" className='rounded-3xl	hover:cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '/></div>
              <div><img src="/img3.png" alt="" className='rounded-3xl	hover:cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '/></div>
              <div><img src="/img4.png" alt=""className='rounded-3xl	hover:cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ' /></div>
              <div><img src="/img5.png" alt="" className='rounded-3xl hover:cursor-pointer 	transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 '/></div>
              <div><img src="/img6.png" alt="" className='rounded-3xl	hover:cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 '/></div>
              <div><img src="/img7.jfif" alt="" className='rounded-3xl	hover:cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 '/></div>
              <div><img src="/img8.png" alt=""className='rounded-3xl hover:cursor-pointer 	transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ' /></div>
              <div><img src="/img9.png" alt="" className='rounded-3xl	hover:cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 '/></div>
        </section>

    </div>
  )
}

export default Gallery