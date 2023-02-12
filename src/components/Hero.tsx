import headerStyles from "@/styles/header.module.scss";
import heroStyles from "@/styles/hero.module.scss";
import Image from "next/image";
import { CustomLink, LinkProps } from "./CustomLink";
import { merriweather } from "@/fonts/merriweather";
import { rubik } from "@/fonts/rubik";

export const Hero = () => {
  const navBarSecondaryLinks: LinkProps[] = [
    { title: "Modellen", url: "#", type: "secondary" },
    { title: "Modellen", url: "#", type: "secondary" },
    { title: "Modellen", url: "#", type: "secondary" },
    { title: "Modellen", url: "#", type: "secondary" },
    { title: "Contact", url: "#", type: "primary" },
  ];

  const mediaLinks: LinkProps[] = [
    { title: "Instagram", url: "#", type: "secondary" },
    { title: "Facebook", url: "#", type: "secondary" },
    { title: "Linkedin", url: "#", type: "secondary" },
  ];

  return (
    <div className={heroStyles.hero}>
      <header className={headerStyles.header}>
        <a href="#">
          <Image src="/logo.svg" width={135} height={25} alt="EcoCabins" />
        </a>
        <nav>
          <ul className={headerStyles["header__nav"]}>
            {navBarSecondaryLinks.map((link) => (
              <li key={link.title}>
                <CustomLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={heroStyles["hero__container"]}>
        <div
          className={`${heroStyles["hero__description"]} ${merriweather.className}`}
        >
          <h1 className={`${heroStyles["hero__header"]} ${rubik.className}`}>
            Duurzame tiny huisjes
          </h1>
          <p className={heroStyles["hero__description__text"]}>
            Een ecologisch tiny huisje is zoveel mogelijk opgebouwd uit duurzame
            natuurlijke materialen
          </p>
        </div>
        <ul className={heroStyles["hero__social-links"]}>
          {mediaLinks.map((link) => (
            <li key={link.title}>
              <CustomLink
                className={heroStyles["hero__social-links__link"]}
                {...link}
              />
            </li>
          ))}
        </ul>
        <button className={`${heroStyles["hero__player"]} ${rubik.className}`}>
          <Image src="/player.svg" alt="" width={72} height={72} />
          Bekijk de film
        </button>
      </div>
      <div className={heroStyles.hero__square}></div>
    </div>
  );
};
