import { div } from "framer-motion/client"


const Fields = () => {
  return (
    <div className="flex flex-col">
      <div className='h-fit ml-24 mb-12 flex justify-center items-center gap-22'>
        <div className='w-[320px] mt-42'>
          <img src="/Card1.png" alt="First Card Phone" className='h-[420px] rounded-2xl rounded-4xl border-4 border-[#6a6f6e]' />
          <div className='flex flex-col gap-3 mt-8 w-54'>
            <span className='text-black font-bold leading-[31px] text-[26px] font-normal text-center'>
              Smart Slice: Asset Diversification
            </span>

            <span className='text-gray-700 font-inter text-[18px] leading-[26px] font-normal text-center'>
              Visualize your portfolio like a pie; Balance your assets using Al
            </span>
          </div>
        </div>

        <div className='w-[320px]'>
          <img src="/Card2.png" alt="First Card Phone" className='h-[420px] rounded-4xl border-4 border-[#6a6f6e]' />
          <div className='flex flex-col gap-3 mt-8 w-54'>
            <span className='text-black font-bold leading-[31px] text-[26px] font-normal text-center'>
              Mirror Finfluencer Live Trades
            </span>

            <span className='text-gray-700 font-inter text-[18px] leading-[26px] font-normal text-center'>
              Copy real-time trades from market makers and learn as you invest
            </span>
          </div>
        </div>

        <div className='w-[320px] mt-42'>
          <img src="/Card3.png" alt="First Card Phone" className='h-[420px] rounded-4xl border-4 border-[#6a6f6e]' />
          <div className='flex flex-col gap-3 mt-8 w-54 text-center'>
            <span className='text-black font-bold leading-[31px] text-[26px] font-normal'>
              Social Sentiment Insights
            </span>

            <span className='text-gray-700 font-inter text-[18px] leading-[26px] font-normal text-center'>
              Tap into market mood by analyzing social chatter on stocks and trends
            </span>
          </div>
        </div>

      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="bg-gradient-to-r from-[#cad5ca] to-[#a899d6] h-54 w-[95%] flex justify-center items-center">
          <span className="font-normal leading-[50px] text-[44px] text-black -tracking-[2px]">Chat with Fortuna like a friend. Get market clarity like a pro.</span>
        </div>
      </div>
    </div>
  )
}

export default Fields
