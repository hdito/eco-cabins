import innovationStyles from "@/styles/innovation.module.scss";
import { merriweather } from "@/fonts/merriweather";
import { rubik } from "@/fonts/rubik";

export const Innovation = (): JSX.Element => {
  return (
    <div className={innovationStyles.innovation}>
      <div className={innovationStyles.innovation__container}>
        <h2
          className={`${merriweather.className} ${innovationStyles.innovation__header}`}
        >
          Innovatie
        </h2>
        <div
          className={`${rubik.className} ${innovationStyles["innovation__text-columns"]}`}
        >
          <p className={innovationStyles.innovation__text}>
            Wij hebben als doel om de EcoCabins voortdurend verder te
            ontwikkelen en innoveren, zodat de EcoCabins uiteindelijk 100%
            duurzaam en circulair zijn. Voorwaarde hierbij is dat de EcoCabins
            betaalbaar blijven. Met behulp van de zon, de wind en de beste
            isolatie geniet u van.
          </p>
          <p className={innovationStyles.innovation__text}>
            Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd
            met indien mogelijk duurzame en/of natuurlijke materialen en hebben
            als opvallende uiterlijke kenmerk de ‘ronde hoeken’, mogelijk
            gemaakt door het specifieke materiaalgebruik De voordelen van
            bouwen.
          </p>
        </div>
      </div>
    </div>
  );
};
