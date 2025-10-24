"use client"
import { useState } from 'react';
import { Mail, Phone, X } from "lucide-react"

import { ContactModal } from './ContactModal';
import { useRouter } from 'next/navigation'; 

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(); 

  
  const handleExternalLink = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#f9f0fb] h-full w-full p-16">
      <div className="flex flex-col justify-center items-center gap-2">
        <span className="text-[44px] leading-[53px] text-black">Request A Call Back</span>
        <span className="text-[22px] leading-[26px] font-inter text-black font-light">Our Team Will Reach Out To You Witin 24 Hours</span>

        <div className="w-144 h-20 flex justify-center items-center mt-12 gap-14">
          <input type="text" className="h-full w-full border-2 border-[#e0e0e0] text-[#c2c2c2] text-[22px] leading-[26px] tracking-[2px] font-inter text-center rounded" placeholder="Phone Number" />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="h-full bg-[#8075ff] rounded-3xl px-8 flex items-center justify-center text-[14px] leading-[19px] font-inter tracking-[2px] cursor-pointer transition-all hover:bg-[#554df7]">
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
            <Mail /><span>Broai.services@gmail.com</span>
          </div>

          <div className="flex gap-2 w-8 h-8">
            <img 
              src="/x.svg" 
              alt="X (Twitter)" 
              title="Follow us on X" 
              onClick={() => handleExternalLink("https://x.com/BroAiServices")}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            />
            <img 
              src="/instagram.png" 
              alt="Instagram" 
              title="Follow us on Instagram" 
              onClick={() => handleExternalLink("https://www.instagram.com/broai.services/")}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            />
            <img 
              src="/linkedin.svg" 
              alt="LinkedIn" 
              title="Connect on LinkedIn" 
              onClick={() => handleExternalLink("https://www.linkedin.com/in/bro-ai-714375384/")}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            />
            
          </div>
        </div>


        <div className="pt-22">
          Ⓒ 2025 Sols4U. All rights reserved.
        </div>
      </div>

      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Footer