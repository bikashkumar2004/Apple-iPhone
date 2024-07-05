import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';

const GsapTo = () => {

    useGSAP(()=>{
        gsap.to('#blue-box', {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'bounce'
        })
    },[]);

  return (
    <div className=''>
      <h1>GsapTo</h1>
      <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg'></div>
    </div>
  )
}

export default GsapTo
