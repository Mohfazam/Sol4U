import { Mail, Phone, X } from "lucide-react"


const Footer = () => {
  return (
    <div className="bg-[#f9f0fb] h-full w-full p-16">
      <div className="flex flex-col justify-center items-center gap-2">
        <span className="text-[44px] leading-[53px] text-black">Request A Call Back</span>
        <span className="text-[22px] leading-[26px] font-inter text-black font-light">Our Team Will Reach Out To You Witin 24 Hours</span>

        <div className="w-144 h-20 flex justify-center items-center mt-12 gap-14">
          <input type="text" className="h-full w-full border-2 border-[#e0e0e0] text-[#c2c2c2] text-[22px] leading-[26px] tracking-[2px] font-inter text-center rounded" placeholder="Phone Number" />
          <button className="h-full bg-[#8075ff] rounded-3xl px-8 flex items-center justify-center text-[14px] leading-[19px] font-inter tracking-[2px] cursor-pointer transition-all hover:bg-[#554df7]">
            Request Call Back
          </button>

        </div>
      </div>

      <div className="w-full flex justify-between text-black h-8 py-24">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Phone /><span>+91 97045 77468 | +91 9391269124</span>
          </div>

          <div className="flex gap-2">
            <Mail /><span>-----------------</span>
          </div>

          <div className="flex gap-2 w-8 h-8">
            <img src="/x.svg" alt="coming soon" title="coming soon" />
            <img src="/instagram.png" alt="coming soon" title="coming soon"/>
            <img src="/linkedin.svg" alt="coming soon" title="coming soon"/>
            
          </div>
        </div>


        <div className="pt-22">
          Ⓒ 2025 Fortuna. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
