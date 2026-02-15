import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Highlights from "@/components/main/Highlights";
import Map from "@/components/main/Map";
import Menu from "@/components/main/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Menu />
      <Map />
      <Footer />
    </>
  );
}
