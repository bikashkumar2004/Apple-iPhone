import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';

const GsapText = () => {

    useGSAP(()=>{
        gsap.to('#text', {
            y: 10,
            opacity: 1,
            ease: 'bounce'
        })
    },[]);

  return (
    <div className=''>
      <h1 id='text' className='opacity-0 translate-y-10'>GsapText</h1>
    </div>
  )
}

export default GsapText
