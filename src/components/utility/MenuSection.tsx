"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "./typography";

gsap.registerPlugin(ScrollTrigger);

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

const MenuItemCard = ({ name, description, price }: MenuItem) => {
  return (
    <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <span className="text-primary font-bold">{price}</span>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const MenuSection = ({ title, items }: MenuSectionProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "circ.inOut",
        stagger: 0.15,
        rotate: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-6xl mx-auto mb-20">
      <Typography
        variant="h2"
        text={title}
        className="text-center mb-4 text-accent"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <MenuItemCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
