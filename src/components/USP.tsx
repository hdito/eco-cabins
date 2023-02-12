import Image from "next/image";
import homeImg from "../../public/home.png";
import uspStyles from "@/styles/usp.module.scss";
import { rubik } from "@/fonts/rubik";
import { merriweather } from "@/fonts/merriweather";

export const USP = (): JSX.Element => {
  const uspContent: { title: string; description: string }[] = [
    {
      title: "Hout",
      description:
        "De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.",
    },
    {
      title: "Glaswol isolatie",
      description:
        "De combinatie van glaswol met een houtskelet constructie geeft een.",
    },
    {
      title: "Afwerking",
      description:
        "De draagconstructies van EcoCabins bestaan uit hout. Hout is duurzaam en.",
    },
    {
      title: "Triple glas",
      description:
        "De combinatie van glaswol met een houtskelet constructie geeft een.",
    },
    {
      title: "Stalen onderstel",
      description:
        "Het stalen onderstel is sterk zijn en heeft de benodigde stijfheid die",
    },
    {
      title: "Infrarood vloer",
      description:
        "De vloer wordt opgewarmd middels opgewekte warmte uit eigen zonne-energie.",
    },
  ];
  return (
    <div className={uspStyles.usp}>
      <div className={uspStyles.usp__container}>
        <Image src={homeImg} alt="Home" />
        <div className={uspStyles["usp__grid"]}>
          {uspContent.map((proposition) => (
            <div key={proposition.title}>
              <h3
                className={`${merriweather.className} ${uspStyles["usp__card-header"]}`}
              >
                {proposition.title}
              </h3>
              <p
                className={`${rubik.className} ${uspStyles["usp__card-description"]}`}
              >
                {proposition.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
