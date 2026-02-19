import Image from "next/image";
import { Button } from "../ui/button";
import Typography from "../utility/typography";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center py-30 px-4 max-w-7xl mx-auto ">
      <div className="w-full md:w-fit flex flex-col justify-between gap-10">
        <Typography
          variant="h2"
          text="Zasladi se kao u najslađem snu"
          className="text-accent text-center"
        />
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium at, leo. Nullam dolore
        </p>
        <Button className="w-1/2 md:w-1/4 mx-auto">
          <Typography text="Iskusi san" variant="h5" />
        </Button>
      </div>
      <div className="w-full md:w-fit">
        <Image
          src="/images/hero.jpg"
          alt="Hero image"
          width={1024}
          height={1024}
          className="rounded-md shadow-primary shadow-xl drop-shadow-border"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
