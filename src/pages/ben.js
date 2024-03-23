import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const oke = () => {
  return (
    <div>
        <Hero 
          ui={0} 
          frontend={170000} 
          backend={50000} 
          name={"Ben Okpancho"}
          phone ={'08033542269'}
          email= {"benokpancho@gmail.com"} />
        <Footer />
    </div>
  )
}

export default oke