import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';

const GsapFromTo = () => {

    useGSAP(()=>{
        gsap.fromTo('#blue-box', {
            x: 0,
            rotation: 0,
            borderRadius: '0%',
        },
        {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'back.out',
            borderRadius: '100%',
        })
    },[]);

  return (
    <div className=''>
      <h1>GsapFromTo</h1>
      <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg'></div>
    </div>
  )
}

export default GsapFromTo