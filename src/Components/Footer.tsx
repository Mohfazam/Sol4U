

const Footer = () => {
  return (
    <div className="bg-[#f9f0fb] h-full w-full p-16">
      <div className="flex flex-col justify-center items-center gap-2">
        <span className="text-[44px] leading-[53px] text-black">Stay in the loop</span>
        <span className="text-[22px] leading-[26px] font-inter text-black">Subscribe to our newsletter to get our latest updates</span>

        <div className="w-120 h-20 flex justify-center items-center mt-12 gap-14">
            <input type="text" className="h-full w-full"/>
            <button className="h-full bg-[#8075ff] rounded-3xl px-8 flex items-center justify-center text-[14px] leading-[19px] font-inter tracking-[2px]">
  Subscribe
</button>

        </div>
      </div>
    </div>
  )
}

export default Footer
