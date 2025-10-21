import Feature from '@/Components/Feature'
import Hero from '@/Components/Hero'
import { Navbar } from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
   <div>
    <Navbar/>
    <Hero />
    <Feature />
   </div>
  )
}

export default page