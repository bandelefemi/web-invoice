import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const oke = () => {
  return (
    <div>
        <Hero 
          ui={150000} 
          frontend={250000} 
          backend={100000} 
          name={"Andrew Oke"}
          phone ={'07062206649'}
          email= {"okeson.andersson@gmail.com"} />
        <Footer />
    </div>
  )
}

export default oke