export const Navbar = () => {
  return (
    <div className="w-full h-16 border border-red-400 text-black">
      <div className="h-full flex items-center px-24 relative">
        
        <a href="/" className="text-4xl font-normal lg:absolute left-1/2 -translate-x-1/2 pt-2 pb-2">
          Sol4U
        </a>
        
        
        <div className="ml-auto">
          <button
           style={{ fontFamily: "'Pontano Sans', sans-serif" }}
           className="w-24 border-2 border-[#8075ff] rounded-full p-2 text-[16px] font-Pontano text-[#9d93fe] font-normal flex justify-center items-center hover:bg-[#8075ff] hover:text-white hover:cursor-pointer transition-ease-in-ease-out">
            <span>Talk To Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};
