"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"

const FAQS = [
  { 
    title: "What is SOL4U?", 
    desc: "SOL4U is a creative tech agency that builds custom software and digital solutions, blending design, development, and strategy to bring ideas to life." 
  },
  { 
    title: "Who do you work with?", 
    desc: "We collaborate with startups, SMEs, and enterprises looking for innovative digital solutions that scale and create impact." 
  },
  { 
    title: "What services do you offer?", 
    desc: "We provide end-to-end solutions including web and app development, UI/UX design, product strategy, and technology consulting tailored to your needs." 
  },
  { 
    title: "How can I start a project with you?", 
    desc: "Simply reach out via chat or email with your idea, and we’ll guide you through the process from concept to launch." 
  },
  { 
    title: "Are you open to ongoing collaborations?", 
    desc: "Absolutely! We work with clients on long-term partnerships to continuously improve, scale, and evolve their digital products." 
  },
]


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-fit pt-32 pb-32 bg-black flex flex-col justify-center items-center overflow-hidden">
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