import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
import localFont from "next/font/local";
import DecorativeDivider from "./decorativeDivider";

// Import fonts
const playfair = localFont({
  src: [
    {
      path: "../../fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-playfair-display",
});

const lato = localFont({
  src: [
    {
      path: "../../fonts/Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Lato/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/Lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Lato/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-lato",
});

const openSans = localFont({
  src: [
    {
      path: "../../fonts/Open_Sans/static/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Open_Sans/static/OpenSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/Open_Sans/static/OpenSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Open_Sans/static/OpenSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-open-sans",
});

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text: string;
  className?: string;
} & HTMLAttributes<HTMLElement>;

const Typography: FC<TypographyProps> = ({
  variant = "h1",
  text,
  className,
  ...props
}) => {
  const fontClasses = {
    h1: playfair.className,
    h2: lato.className,
    h3: lato.className,
    h4: lato.className,
    h5: lato.className,
    h6: lato.className,
    p: openSans.className,
    span: openSans.className,
  };

  const classNames = {
    h1: "scroll-m-24 text-4xl font-extra-bold tracking-tight lg:text-5xl text-primary",
    h2: "scroll-m-16 text-3xl font-bold tracking-tight lg:text-4xl",
    h3: "scroll-m-12 text-2xl font-semibold tracking-tight lg:text-3xl",
    h4: "scroll-m-10 text-xl font-medium tracking-tight lg:text-2xl",
    h5: "scroll-m-8 text-lg font-normal tracking-tight lg:text-xl",
    h6: "scroll-m-8 text-base font-normal tracking-tight lg:text-xl",
    p: "scroll-m-4 text-normal font-normal tracking-tight lg:text-base",
    span: "scroll-m-4 text-md font-normal tracking-tight lg:text-base",
  };

  const Tag = variant;
  const defaultClassName = classNames[variant];
  const fontClassName = fontClasses[variant];
  const combinedClassName = cn(defaultClassName, fontClassName, className);

  // Special layout only for h1
  if (variant === "h1") {
    return (
      <div className="flex flex-col items-center text-center">
        <h1 className={combinedClassName} {...props}>
          {text}
        </h1>
        <DecorativeDivider className="max-w-md" />
      </div>
    );
  }

  return (
    <Tag className={combinedClassName} {...props}>
      {text}
    </Tag>
  );
};

export default Typography;
