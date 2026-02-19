import { MdFacebook, MdOutlinePhoneInTalk } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Clock } from "lucide-react";

const NavbarItems: { title: string; href: string }[] = [
  {
    title: "O nama",
    href: "#",
  },
  {
    title: "Popularni slatkiši",
    href: "#highlights",
  },
  {
    title: "Meni",
    href: "#menu",
  },
  {
    title: "Kontakt",
    href: "#contact",
  },
];

const contactInfo = [
  {
    type: "working-hours",
    icon: <Clock size={50} className="text-primary/80" />,
    title: "Ponedeljak - Petak",
    subtitle: "10:00 - 20:00",
    href: "",
  },
  {
    type: "phone",
    icon: <MdOutlinePhoneInTalk size={50} className="text-primary/80" />,
    title: "+381 642223288",
    subtitle: "+381 631802999",
    href: "tel:+381642223288",
    hrefSub: "tel:+381631802999",
  },

  {
    type: "location",
    icon: <FaMapMarkedAlt size={50} className="text-primary/80" />,
    title: "Pirot, Srbija",
    subtitle: "Ulica 18, Pirot",
    href: "https://maps.app.goo.gl/cLPcCnuoD4RpKtV99",
  },
  {
    type: "email",
    icon: <IoIosMail size={50} className="text-primary/80" />,
    title: "slatkisan@gmail.com",
    subtitle: "Podrška i informacije",
    href: "mailto:slatkisan@gmail.com",
  },
];

const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063612251504",
    icon: <MdFacebook className="hover:text-primary" size={30} />,
    title: "Slatki san Facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/identabiljanapetrovic/?hl=en",
    icon: <RxInstagramLogo className="hover:text-primary" size={30} />,
    title: "Slatki san Instagram",
  },
];

const projects = [
  {
    name: "Estetska Stomatologija",
    href: "/services/estetska-stomatologija",
    title: "Rešenja za savršen osmeh od Identa",
  },
  {
    name: "Implantologija",
    href: "/services/implantologija",
    title: "Najbolji implantološki tretmani u Nišu",
  },
  {
    name: "Dečija Stomatologija",
    href: "/services/decija-stomatologija",
    title: "Nega i briga za najmlađe pacijente",
  },
  {
    name: "Oralna Hirurgija",
    href: "/services/oralna-hirurgija",
    title: "Profesionalni i sigurni hirurški tretmani",
  },
  {
    name: "Preventivna Stomatologija",
    href: "/services/preventivna-stomatologija",
    title: "Održite zdravlje zuba uz Identa",
  },
];

const usefulLinks = [
  {
    name: "Saveti za negu zuba",
    href: "https://curaprox.rs/blog/post/cisti-zubi-detaljno-uputstvo",
  },
  {
    name: "Zašto su redovni pregledi važni?",
    href: "https://hypelist.rs/stomatoloski-pregled/",
  },
  {
    name: "Kako odabrati pravog stomatologa?",
    href: "https://stomatologija.me/blog/kako-izabrati-pravog-stomatologa/",
  },
  {
    name: "Najnovije tehnologije u stomatologiji",
    href: "https://www.ictvesti.com/nove-tehnologije-u-sluzbi-inovacija-u-stomatologiji/",
  },
];

const contactDetails = [
  {
    name: "slatkisan@gmail.com",
    href: "mailto:slatkisan@gmail.com",
    title: "Kontakt e-mail Slatki san",
  },
  {
    name: "+381 642223288",
    href: "tel:+381642223288",
    title: "Kontakt telefon Slatki san",
  },
  {
    name: "+381 631802999",
    href: "tel:+381631802999",
    title: "Kontakt telefon Slatki san",
  },
];

const HiglightsImages = [
  "/images/highlights/cupcake.jpg",
  "/images/highlights/cheescake.jpg",
  "/images/highlights/icecream.jpg",
  "/images/highlights/image4.png",
  "/images/highlights/image5.jpg",
  "/images/highlights/image6.jpg",
];

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

const cakes: MenuItem[] = [
  {
    name: "Chocolate Dream",
    description: "Rich dark chocolate sponge with silky ganache.",
    price: "4.50€",
  },
  {
    name: "Strawberry Bliss",
    description: "Vanilla cake layered with fresh strawberries and cream.",
    price: "4.20€",
  },
  {
    name: "Caramel Fantasy",
    description: "Soft sponge with salted caramel and buttercream.",
    price: "4.70€",
  },
];

const cheesecakes: MenuItem[] = [
  {
    name: "Classic New York",
    description: "Creamy baked cheesecake with biscuit base.",
    price: "4.80€",
  },
  {
    name: "Berry Heaven",
    description: "Cheesecake topped with mixed berry compote.",
    price: "5.00€",
  },
  {
    name: "Oreo Madness",
    description: "Cookies & cream cheesecake with chocolate drizzle.",
    price: "5.20€",
  },
];

const iceCream: MenuItem[] = [
  {
    name: "Vanilla Bean",
    description: "Classic Madagascar vanilla.",
    price: "2.50€",
  },
  {
    name: "Belgian Chocolate",
    description: "Intense chocolate flavor.",
    price: "2.80€",
  },
  {
    name: "Pistachio Deluxe",
    description: "Creamy pistachio with roasted nuts.",
    price: "3.00€",
  },
];

const drinks: MenuItem[] = [
  {
    name: "Espresso",
    description: "Strong and aromatic Italian coffee.",
    price: "1.80€",
  },
  {
    name: "Cappuccino",
    description: "Espresso with steamed milk foam.",
    price: "2.50€",
  },
  {
    name: "Fresh Lemonade",
    description: "Homemade refreshing lemonade.",
    price: "3.00€",
  },
];

export {
  NavbarItems,
  HiglightsImages,
  cakes,
  cheesecakes,
  iceCream,
  drinks,
  contactInfo,
  socialMediaLinks,
  projects,
  usefulLinks,
  contactDetails,
};
