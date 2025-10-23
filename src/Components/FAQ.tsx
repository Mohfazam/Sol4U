"use client";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="h-[700px] bg-black flex justify-center items-center overflow-hidden">
      <motion.div
        className="text-[#8075ff] text-[44px] font-normal leading-[50px]"
        initial={{ y: 0 }}
        animate={{ y: -250 }}
        transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
      >
        FAQ
      </motion.div>
    </div>
  );
};

export default FAQ;
