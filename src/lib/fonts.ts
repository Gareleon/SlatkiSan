import localFont from "next/font/local";

const playfair = localFont({
  src: [
    {
      path: "../fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Playfair_Display/static/PlayfairDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-playfair-display",
  display: "swap",
  preload: true,
});

const lato = localFont({
  src: [
    {
      path: "../fonts/Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Lato/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Lato/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-lato",
  display: "swap",
  preload: true,
});

const openSans = localFont({
  src: [
    {
      path: "../fonts/Open_Sans/static/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Open_Sans/static/OpenSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Open_Sans/static/OpenSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Open_Sans/static/OpenSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
});

// const geist = localFont({
//   src: [
//     {
//       path: "../fonts/Geist/static/Geist-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Geist/static/Geist-Italic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../fonts/Geist/static/Geist-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Geist/static/Geist-BoldItalic.ttf",
//       weight: "700",
//       style: "italic",
//     },
//   ],
//   variable: "--font-geist",
//   display: "swap",
//   preload: true,
// });

// const geistMono = localFont({
//   src: [
//     {
//       path: "../fonts/Geist_Mono/static/GeistMono-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Geist_Mono/static/GeistMono-Italic.ttf",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../fonts/Geist_Mono/static/GeistMono-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Geist_Mono/static/GeistMono-BoldItalic.ttf",
//       weight: "700",
//       style: "italic",
//     },
//   ],
//   variable: "--font-geist-mono",
//   display: "swap",
//   preload: true,
// });

export { playfair, lato, openSans };
