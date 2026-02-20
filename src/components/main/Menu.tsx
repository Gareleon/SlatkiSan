"use client";

import { cakes, cheesecakes, drinks, iceCream } from "../utility/constants";
import MenuSection from "../utility/MenuSection";
import Title from "../utility/title";
import Typography from "../utility/typography";

const Menu = () => {
  return (
    <section id="menu" className="py-20 px-6 bg-background text-foreground">
      <div className="text-center mb-20">
        <Title text="Naš slatki meni" />
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
