'use client'

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ScrollingPhoto() {
    useEffect(() => {
        let smoother = ScrollSmoother.create({
            smooth: 2,
            effects: true,
        });

        gsap.from('.heading', {
            opacity: 0,
            y: 50,
            ease: "expo.out",
            scrollTrigger: {
                trigger: '.heading .images .pin',
                start: "center 50%",
                scrub: true,
                pin: '.pin',
                pinSpacing: true,
                markers: true, // ubah ini ke false
            },
        });

        return () => {
            if (smoother) smoother.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
<div id="smooth-wrapper">
    <div id="smooth-content">
        <main>
            <section className="relative z-1">
                <div className="heading relative z-2 mix-blend-difference -webkit-perspective-1000px visibility-visible -backface-visibility-visible transform-rotate-(0.1deg)">
                    <div className="pin relative z-2">
                        <h1 className="relative text-9xl uppercase text-center"><span className="clamp relative z-1">Find </span>
                        <span className="yt z-3">your destination</span></h1>
                    </div>
                </div>

                <div className="images grid grid-cols-4 items-stretch justify-items-center gap-3">
                    <img className="max-w-full h-[45vh] object-cover" data-speed="clamp(2.4)" src='https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                    <img className="max-w-full h-[45vh] object-cover" data-speed="clamp(1.8)" src='https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                    <img className="max-w-full h-[45vh] object-cover" data-speed="clamp(2.2)" src='https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                    <img className="max-w-full h-[45vh] object-cover" data-speed="clamp(1.5)" src='https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                </div>
            </section>

            <section className="spacer h-[50vh]">
            </section>
        </main>
    </div>
</div>
    )
}
