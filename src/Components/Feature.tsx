import React from 'react'

const Feature = () => {
  return (
    <div className='bg-black text-white w-full h-[720px] flex justify-center items-center rounded-bl-3xl rounded-br-3xl'>
      <div className='flex'>
        <div>
          <img src="/Phone.png" alt="Phone PNG" className='h-[540px] rounded-4xl border-4 border-[#6a6f6e] ml-28 mr-12'/>
        </div>

        <div className='flex flex-col items-center justify-center gap-6 text-[36px] font-normal text-center leading-[50px]'>
          <span className='w-[550px]'>For brands that believe in ideas worth building.</span>

          <span className='w-[510px]'>We turn concepts into seamless digital experiences.  <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold'>No noise.</span>      <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold'>No confusion.</span>  Just clarity and execution.</span>
        </div>

      </div>
    </div>
  )
}

export default Feature
