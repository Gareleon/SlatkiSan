"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Typography from "./typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ text }: { text: string }) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%", // when element reaches 80% of viewport
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <Typography
      ref={titleRef}
      variant="h1"
      text={text}
      className="translate-y-20 opacity-0"
    />
  );
};

export default Title;
