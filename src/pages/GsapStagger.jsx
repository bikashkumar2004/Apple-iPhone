import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      borderRadius: '100%',
      
    //   stagger: 0.5
    stagger: {
        amount: 1.5,
        grid: [2,1],
        axis: "y",
        ease: "circ.inOut",
        from: 'edges'    }
    });
  }, []);

  return (
    <>
      <h1>GsapStagger</h1>
      <div className="flex gap-10">
        <div className="rounded-lg w-20 h-20 stagger-box bg-green-600"></div>
        <div className="rounded-lg w-20 h-20 stagger-box bg-purple-600"></div>
        <div className="rounded-lg w-20 h-20 stagger-box bg-orange-600"></div>
        <div className="rounded-lg w-20 h-20 stagger-box bg-purple-600"></div>
        <div className="rounded-lg w-20 h-20 stagger-box bg-red-600"></div>
        <div className="rounded-lg w-20 h-20 stagger-box bg-blue-600"></div>
        <div className="rounded-lg w-20 h-20 stagger-box bg-yellow-600"></div>
        <div className="rounded-lg w-20 h-20 stagger-box bg-cyan-600"></div>
      </div>
    </>
  );
};

export default GsapStagger;
