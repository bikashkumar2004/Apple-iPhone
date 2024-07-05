import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';

const GsapFrom = () => {

    useGSAP(()=>{
        gsap.from('#blue-box', {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'back.in'
        })
    },[]);

  return (
    <div className=''>
      <h1>GsapFrom</h1>
      <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg'></div>
    </div>
  )
}

export default GsapFrom