import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className=' p-7 flex justify-around text-slate-500 font-bold sm:font-normal sm:p-5 sm:justify-between xl:p-7 xl:font-bold 2xl:justify-around'>
         <h2 className='ml-4'>YOUR LOGO</h2>
         <ul className='flex justify-around gap-16 mr-4'>
            <li className='hover:cursor-pointer hover:border-b-2 border-slate-500'>HOME</li>
            <li className='hover:cursor-pointer hover:border-b-2 border-slate-500'>GALLERY</li>
            <li className='hover:cursor-pointer hover:border-b-2 border-slate-500'>CONTACT</li>
         </ul>
        </nav>
        
        
        
    </div>
  )
}

export default Navbar