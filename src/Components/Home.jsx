import React from 'react'

function Home() {
  return (
    <div>
        <main className='flex justify-around   m-5 sm:flex-col-reverse sm:w-full sm:justify-center items-center xl:flex-row m:justify-center m:flex-col-reverse m:w-full m:gap-6 m:mt-10'>
            <div className='flex justify-center items-start flex-col p-3  gap-16  sm:items-center sm:p-3 sm:gap-7 lg:p-4 xl:items-start m:items-center m:gap-6 2xl:gap-12 '>
                <h1 className='text-indigo-800	text-6xl font-bold	m:text-4xl 2xl:text-6xl'>CREATIVE TEAM</h1>
                <p className='text-blue-500 text-lg m:text-sm 2xl:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat ut commodi incidunt. Consequuntur distinctio dicta obcaecati laboriosam qui delectus aperiam doloremque eaque suscipit corporis. Ipsa laboriosam explicabo et commodi!</p>
                <button className='bg-blue-900 p-3 w-1/3 rounded-full text-white hover:bg-blue-700'>JOIN NOW</button>

            </div>
            <img src="/image.jfif" alt=""  className='w-3/5 sm:w-4/5 xl:w-3/5'/>
        </main>
    </div>
  )
}

export default Home