import { MdCopyright } from "react-icons/md";
import {
  contactDetails,
  contactInfo,
  socialMediaLinks,
  usefulLinks,
} from "../utility/constants";
import Link from "next/link";
import Typography from "../utility/typography";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="w-full mx-auto">
        {/* Top Contact Info */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 px-4 pt-12">
          {contactInfo.map((item, index) => (
            <div className="flex gap-3 items-center justify-start" key={index}>
              <div className="text-primary text-xl">{item.icon}</div>

              <div>
                <Link
                  href={item.href}
                  title={item.title}
                  className="hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>

                {item.subtitle && (
                  <Typography
                    variant="p"
                    text={item.subtitle}
                    className="text-muted-foreground text-sm"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Section */}
        <div className="w-full px-4 md:px-12 py-6 bg-secondary/30 border-y border-border">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-3xl mx-auto gap-4">
            <Typography
              text="Zapratite Slatki san na društvenim mrežama 🍰"
              variant="p"
              className="text-muted-foreground"
            />

            <div className="space-x-4 text-2xl flex flex-wrap justify-center">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="max-w-7xl px-4 mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10">
          {/* About */}
          <div className="md:col-span-2">
            <h5 className="text-2xl font-bold text-primary">Slatki san</h5>
            <hr className="my-4 w-20 h-1 bg-primary rounded-full" />

            <p className="text-muted-foreground">
              U Slatkom snu stvaramo torte, kolače i sladolede koji bude
              najlepše uspomene. Svaka poslastica je pripremljena sa pažnjom,
              vrhunskim sastojcima i puno ljubavi. Bilo da slavite rođendan,
              venčanje ili jednostavno želite nešto slatko – mi smo tu da
              zasladimo vaš dan.
            </p>
          </div>

          {/* Proizvodi */}
          <div>
            <h5 className="text-xl font-bold">Naši proizvodi</h5>
            <hr className="my-4 w-20 h-1 bg-primary rounded-full" />

            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-default">
                Torte po narudžbini
              </li>
              <li className="hover:text-primary cursor-default">Cheesecake</li>
              <li className="hover:text-primary cursor-default">
                Kolači i deserti
              </li>
              <li className="hover:text-primary cursor-default">
                Domaći sladoled
              </li>
              <li className="hover:text-primary cursor-default">
                Kafa i napici
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h5 className="text-xl font-bold">Kontakt</h5>
            <hr className="my-4 w-20 h-1 bg-primary rounded-full" />

            <ul className="space-y-2 text-muted-foreground">
              {contactDetails.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={contact.title}
                  >
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full py-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <p>
            <MdCopyright className="inline-block mr-2" />
            2025 Slatki san. Sva prava zadržana.
          </p>

          <p className="opacity-80">Ručno pravljeno sa ljubavlju 💖</p>
        </div>
      </div>
    </footer>
  );
}
