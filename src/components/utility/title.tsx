"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "./typography";

gsap.registerPlugin(ScrollTrigger);

const Title = ({ text }: { text: string }) => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={titleRef}>
      <Typography variant="h1" text={text} />
    </div>
  );
};

export default Title;
