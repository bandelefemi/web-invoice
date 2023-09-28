import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const oke = () => {
  return (
    <div>
        <Hero 
          ui={0} 
          frontend={200000} 
          backend={200000} 
          name={"Afolabi Ajimoti"}
          phone ={'08050671385'}
          email= {"info@morethanlenses.com"} />
        <Footer />
    </div>
  )
}

export default oke