"use client";

import { cakes, cheesecakes, drinks, iceCream } from "../utility/constants";
import Typography from "../utility/typography";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
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
  return (
    <div className="w-full max-w-6xl mx-auto mb-20">
      <Typography
        variant="h2"
        text={title}
        className="text-center mb-4 text-accent"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <MenuItemCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-6 bg-background text-foreground">
      <div className="text-center mb-20">
        <Typography variant="h1" text="Naš slatki meni" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover handcrafted cakes, creamy cheesecakes, artisan ice cream, and
          refreshing drinks made with love.
        </p>
      </div>

      <MenuSection title="Cakes" items={cakes} />
      <MenuSection title="Cheesecakes" items={cheesecakes} />
      <MenuSection title="Ice Cream" items={iceCream} />
      <MenuSection title="Drinks" items={drinks} />
    </section>
  );
};

export default Menu;
