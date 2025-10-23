import { div } from "framer-motion/client"


const Fields = () => {
  return (
    <div className="flex flex-col">
      <div className='h-fit ml-24 mb-12 flex justify-center items-center gap-22'>
        <div className='w-[320px] mt-42'>
          <img src="/Card1.png" alt="First Card Phone" className='h-[420px] rounded-2xl rounded-4xl border-4 border-[#6a6f6e]' />
          <div className='flex flex-col gap-3 mt-8 w-54'>
            <span className='text-black font-bold leading-[31px] text-[26px] font-normal text-center'>
              Smart Solutions: Designed for Impact
            </span>

            <span className='text-gray-700 font-inter text-[18px] leading-[26px] font-normal text-center'>
              Transform your ideas into high-performing digital products with our expert team.
            </span>
          </div>
        </div>

        <div className='w-[320px]'>
          <img src="/Card2.png" alt="First Card Phone" className='h-[420px] rounded-4xl border-4 border-[#6a6f6e]' />
          <div className='flex flex-col gap-3 mt-8 w-54'>
            <span className='text-black font-bold leading-[31px] text-[26px] font-normal text-center'>
              Real-Time Project Collaboration
            </span>

            <span className='text-gray-700 font-inter text-[18px] leading-[26px] font-normal text-center'>
              Stay connected with your team as we build software solutions that adapt to your vision.
            </span>
          </div>
        </div>

        <div className='w-[320px] mt-42'>
          <img src="/Card3.png" alt="First Card Phone" className='h-[420px] rounded-4xl border-4 border-[#6a6f6e]' />
          <div className='flex flex-col gap-3 mt-8 w-54 text-center'>
            <span className='text-black font-bold leading-[31px] text-[26px] font-normal'>
              Actionable Insights for Your Product
            </span>

            <span className='text-gray-700 font-inter text-[18px] leading-[26px] font-normal text-center'>
              We turn data and user feedback into features that truly make an impact.
            </span>
          </div>
        </div>

      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="bg-gradient-to-r from-[#cad5ca] to-[#a899d6] h-54 w-[95%] flex justify-center items-center">
          <span className="font-normal leading-[50px] text-[32px] text-black -tracking-[1px]">Chat or call our team at any hour - get guidance, insights, and technical support for your projects.</span>
        </div>
      </div>
    </div>
  )
}

export default Fields
