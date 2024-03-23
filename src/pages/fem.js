import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const oke = () => {
  return (
    <div>
        <Hero 
          ui={0} 
          frontend={2000} 
          backend={0} 
          name={"Femi"}
          phone ={'08136626559'}
          email= {"femzy14@gmail.com"} />
        <Footer />
    </div>
  )
}

export default oke