import Image from "next/image";
import materialsImg from "../../public/materials.png";
import { CustomLink } from "./CustomLink";
import materialsStyles from "@/styles/materials.module.scss";
import { merriweather } from "./merriweather";
import { rubik } from "./rubik";

export const Materials = (): JSX.Element => {
  return (
    <div className={materialsStyles.materials}>
      <div className={materialsStyles["materials__square"]}></div>
      <div className={materialsStyles["materials__content-container"]}>
        <div className={materialsStyles["materials__text-container"]}>
          <h2
            className={`${merriweather.className} ${materialsStyles.materials__header}`}
          >
            Duurzame materialen
          </h2>
          <p
            className={`${rubik.className} ${materialsStyles.materials__description}`}
          >
            Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd
            met indien mogelijk duurzame en/of natuurlijke materialen en hebben
            als opvallende uiterlijke kenmerk de ‘ronde hoeken’, mogelijk
            gemaakt door het specifieke materiaalgebruik. De voordelen van
            bouwen met hout zijn legio: hout is licht, flexibel, isoleert goed
            en bouwt snel en efficiënt.
          </p>
          <CustomLink type="ghost" title="Lees meer" url="#" />
        </div>
        <Image
          className={materialsStyles.materials__image}
          src={materialsImg}
          alt=""
        />
      </div>
    </div>
  );
};
