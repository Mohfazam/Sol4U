"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"

const FAQS = [
  { title: "What is Fortuna", desc: "Fortuna is your AI-powered investing copilot—giving you market insights, social sentiment, and personalized portfolio strategies in plain language." },
  { title: "Is Fortuna live yet?", desc: "We're launching soon. You can join the waitlist for early access." },
  { title: "What can I ask Fortuna?", desc: "Anything from Is Nvidia a good buy right now Build a portfolio with a focus on Tech and Pharma for me? Just type it—Fortuna gets it." },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-[700px] bg-black flex flex-col justify-center items-center overflow-hidden">
      <div className="text-[#8075ff] text-[44px] font-normal leading-[50px]" draggable={false}>
        FAQ
      </div>

      <div className="w-full max-w-[900px]">
        
        <div className="bg-[#666367] h-[1px] w-full mt-10 rounded" />
        {FAQS.map((faq, index) => (
          <div key={index} className="flex flex-col">
            <div 
              className="flex justify-between hover:cursor-pointer items-center py-6 px-2"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-[26px] font-normal text-[#8075ff]">{faq.title}</span>
              <ChevronDown 
                className={`text-[#8075ff] transition-transform duration-500 ease-in-out ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out px-2 ${
                openIndex === index ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"
              }`}
            >
              <span className="text-[22px] leading-[26px] text-[#f9f0fb] block">
                {faq.desc}
              </span>
            </div>
            
            <div className="bg-[#666367] h-[1px] w-full rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;