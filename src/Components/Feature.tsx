import React from 'react'

const Feature = () => {
  return (
    <div className='bg-black text-white w-full h-[720px] flex justify-center items-center rounded-bl-3xl rounded-br-3xl'>
      <div className='flex'>
        <div>
          <img src="/Phone.png" alt="Phone PNG" className='h-[540px] rounded-4xl border-4 border-[#6a6f6e] ml-28 mr-12'/>
        </div>

        <div className='flex flex-col items-center justify-center gap-6 text-[36px] font-normal text-center leading-[50px]'>
          <span className='w-[550px]'>For the generation that invests with intention and intuition.</span>

          <span className='w-[550px]'>We read Reddit, earnings calls, and headlines so you don't have to.  <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold'>No noise.</span>      <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold'>No jargon.</span>  Just clear actionable insights.</span>
        </div>

      </div>
    </div>
  )
}

export default Feature
