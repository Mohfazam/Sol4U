

const Hero = () => {
    return (
        <div className='mt-12 mr-0 ml-4 text-black'>
            <div className='text-black text-[118px] leading-[112px] w-full flex justify-center items-center overflow-hidden'>
                <span className='opacity-0' style={{
                    animation: 'fadeInUp 0.8s ease-out 0.2s forwards, floatSubtle 6s ease-in-out 1s infinite'
                }}> Ask.Learn.Invest</span>
            </div>

            <div className='flex mt-18 items-center justify-center gap-14'>
                <div className='flex items-center justify-center font-bold'>
                    <span className='w-[600px] text-[44px] leading-[50px] text-center'>
                        <span className='inline-block opacity-0' style={{
                            animation: 'fadeInUp 0.8s ease-out 0.4s forwards'
                        }}>
                            Join the future of social investing with the
                        </span>
                        <span className='text-[#6321ee] inline-block opacity-0' style={{
                            animation: 'fadeInUp 0.8s ease-out 0.6s forwards, gradientShift 3s ease-in-out 1.4s infinite'
                        }}>
                            &nbsp;AI Copilot that speaks the market fluently
                        </span>
                    </span>
                </div>

                <div className='opacity-0' style={{
                    animation: 'fadeIn 1s ease-out 0.8s forwards'
                }}>
                    <img src="/Hero.svg" alt="Hero.svg" draggable={false} className='w-172' />
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes gradientShift {
                    0%, 100% {
                        filter: brightness(1);
                    }
                    50% {
                        filter: brightness(1.15);
                    }
                }
            `}</style>
        </div>
    )
}

export default Hero