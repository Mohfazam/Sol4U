"use client"

import React, { useState, useEffect } from 'react'

const Hero = () => {
    const words = ['Invest', 'Grow', 'Thrive']
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentWordIndex((prev) => (prev + 1) % words.length)
                setIsAnimating(false)
            }, 500)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='shapedividers_com-349 mt-12 text-black pb-32 -mx-4'>
            <div className='text-black text-[118px] leading-[112px] w-full flex justify-center items-center overflow-hidden px-4'>
                <span className='opacity-0' style={{
                    animation: 'fadeInUp 0.8s ease-out 0.2s forwards, floatSubtle 6s ease-in-out 1s infinite'
                }}>
                    Ask.Learn.
                    <span 
                        className='inline-block'
                        style={{
                            transition: 'all 0.5s ease-in-out',
                            opacity: isAnimating ? 0 : 1,
                            transform: isAnimating ? 'translateY(-20px)' : 'translateY(0)',
                        }}
                    >
                        {words[currentWordIndex]}
                    </span>
                </span>
            </div>

            <div className='flex mt-18 items-center justify-center gap-14 px-4'>
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

                @keyframes floatSubtle {
                    0%, 100% {
                        transform: translateY(0px) scale(1);
                    }
                    50% {
                        transform: translateY(-8px) scale(1.01);
                    }
                }

                .shapedividers_com-349 {
                    overflow: hidden;
                    position: relative;
                }
                
                .shapedividers_com-349::before {
                    content: '';
                    font-family: 'shape divider from ShapeDividers.com';
                    position: absolute;
                    bottom: -1px;
                    left: -1px;
                    right: -1px;
                    top: -1px;
                    z-index: 3;
                    pointer-events: none;
                    background-repeat: no-repeat; 
                    background-size: 100% 127px;
                    background-position: 50% 0%;    
                    background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23fbd8c2"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%23fbd8c2"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%23fbd8c2"/></svg>'); 
                }

                @media (min-width:768px) {
                    .shapedividers_com-349::before {
                        background-size: 100% 127px;
                        background-position: 50% 0%;   
                    }  
                }
                
                @media (min-width:1025px) {
                    .shapedividers_com-349::before { 
                        bottom: -0.1vw;
                        left: -0.1vw;
                        right: -0.1vw;
                        top: -0.1vw; 
                        background-size: 100% 127px;
                        background-position: 50% 100%;  
                        background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M35.28 1.16c-3.17-.8-7.3.4-10.04.56-2.76.17-9.25-1.47-12.68-1.3-3.42.16-4.64.84-7.04.86C3.12 1.31 0 .4 0 .4v1.77h35.28z" fill="%23000000"/></svg>'); 
                    }
                }
                
                @media (min-width:2100px) {
                    .shapedividers_com-349::before {
                        background-size: 100% calc(2vw + 127px);
                    }
                }
            `}</style>
        </div>
    )
}

export default Hero