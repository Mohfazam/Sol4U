import FAQ from '@/Components/FAQ'
import Feature from '@/Components/Feature'
import Fields from '@/Components/Fields'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import { Navbar } from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
   <div>
    <Navbar/>
    <Hero />
    <Feature />
    <Fields />
    <FAQ />
    <Footer />
   </div>
  )
}

export default page