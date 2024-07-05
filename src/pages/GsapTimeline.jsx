import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";


const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
  useGSAP(() => {
    timeline.to("#blue-box", {
      x: 250,
      rotation: 360,
      duration: 2,
      ease: "bounce",
    });

    timeline.to("#blue-box", {
      x: 300,
      scale: 2,
      rotation: 360,
      duration: 2,
      ease: "bounce",
    });
  }, []);

  return (
    <>
      <h1>GsapTimeline</h1>
      <div className="">
        <button
          onClick={() => {
            if (timeline.pause) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
        >
          Play/Pause
        </button>

        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
      </div>
    </>
  );
};

export default GsapTimeline;
