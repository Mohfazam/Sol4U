"use client"
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-16 text-black mt-2 mb-2">
      <div className="h-full flex items-center px-24 relative">
        
        <a href="/" className="text-[39px] leading-[46px] font-normal lg:absolute left-1/2 -translate-x-1/2 pt-2 pb-2">
          Sol4U
        </a>
        
        
        <div className="ml-auto">
          <button
           onClick={() => setIsModalOpen(true)}
           style={{ fontFamily: "'Pontano Sans', sans-serif" }}
           className="w-25 border-2 border-[#8075ff] rounded-full p-3 text-[16px] font-Pontano text-[#9d93fe] font-normal flex justify-center items-center hover:bg-[#8075ff] hover:text-white hover:cursor-pointer transition-colors duration-300 ease-in-out">
            <span>Talk To Us</span>
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};