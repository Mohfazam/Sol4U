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
    <script src="http://localhost:5173/dist/widget.iife.js" data-site-id="d696375c-929a-49dc-9c7f-ee334a24a7b4"></script>
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