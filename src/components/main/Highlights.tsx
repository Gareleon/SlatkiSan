import { HiglightsImages } from "../utility/constants";
import { CarouselPlugin } from "../utility/highlightsCarousel";
import Typography from "../utility/typography";

const Highlights = () => {
  return (
    <section
      className="flex flex-col gap-5 items-center justify-center py-20 px-4 md:px-0"
      id="highlights"
    >
      <Typography variant="h1" text="Popularni slatkiši" />
      <CarouselPlugin images={HiglightsImages} />
      <p className="text-center text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
        at, leo. Nullam dolore
      </p>
    </section>
  );
};

export default Highlights;
