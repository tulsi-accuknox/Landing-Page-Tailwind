import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className=' p-7 flex justify-around text-slate-500 font-bold m:flex-col m:justify-center  m:p-0 m:ml-16  m:gap-5 m:mt-6 sm:font-normal sm:p-5 sm:justify-between xl:p-7 xl:font-bold  2xl:gap-8 '>
         <h2 className='ml-4 m:m-auto 2xl:text-5xl'>YOUR LOGO</h2>
         <ul className='flex justify-around gap-16 mr-4 m:justify-center m:gap-5 m:font-light 2xl:text-xl 2xl:font-semibold 2xl:gap-10'>
            <li className='hover:cursor-pointer hover:border-b-2 border-slate-500'>HOME</li>
            <li className='hover:cursor-pointer hover:border-b-2 border-slate-500'>GALLERY</li>
            <li className='hover:cursor-pointer hover:border-b-2 border-slate-500'>CONTACT</li>
         </ul>
        </nav>
        
        
        
    </div>
  )
}

export default Navbar