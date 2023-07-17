import React from 'react'
import { FacebookButton } from 'react-social'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className=' border-t border-highlight p-6 md:p-12 bg-primary flex items-center justify-between '>
        <div>
            <p className=' text-white font-light text-lg'>
                Questions?
            </p>
            <p className=' text-sec text-[0.7rem] mt-2'>
                Bandele Femi | +2348136626559 | bandelefemi@gmail.com
            </p>
        </div>
        <div className=' flex gap-2'>
            <SocialIcon url='https://facebook.com/bandelefemi' bgColor='#666' style={{width: '30px', height: '30px'}} />
            <SocialIcon url='https://instagram.com/bandelefemi' bgColor='#666' style={{width: '30px', height: '30px'}} />

        </div>
    </div>
  )
}

export default Footer