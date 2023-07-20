import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const oke = () => {
  return (
    <div>
        <Hero 
          ui={0} 
          frontend={230000} 
          backend={0} 
          name={"Ben Okpancho"}
          phone ={'08033542269'}
          email= {"benokpancho@gmail.com"} />
        <Footer />
    </div>
  )
}

export default oke