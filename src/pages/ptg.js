import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const oke = () => {
  return (
    <div>
        <Hero 
          ui={0} 
          frontend={0} 
          backend={70000} 
          name={"PTG Creatives"}
          phone ={'09063249232'}
          email= {"ptgconcepts@gmail.com"} />
        <Footer />
    </div>
  )
}

export default oke