"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = (
  ref: RefObject<HTMLElement>,
  options: gsap.TweenVars & { scrollTrigger?: gsap.ScrollTriggerVars },
) => {
  useEffect(() => {
    const element = ref.current;

    if (element) {
      const animation = gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          ...options.from,
        },
        {
          opacity: 1,
          y: 0,
          ...options,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            ...options.scrollTrigger,
          },
        },
      );

      return () => {
        animation.kill();
        ScrollTrigger.getById(animation.scrollTrigger?.id as string)?.kill();
      };
    }
  }, [ref, options]);
};
