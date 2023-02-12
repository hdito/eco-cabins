import { rubik } from "@/fonts/rubik";
import signatureStyles from "@/styles/signature.module.scss";

export const Signature = (): JSX.Element => {
  return (
    <div className={`${rubik.className} ${signatureStyles.signature}`}>
      Design by{" "}
      <a
        className={signatureStyles.signature__link}
        href="https://www.figma.com/community/file/1018095179760337641"
      >
        Hugo
      </a>{" "}
      provided under{" "}
      <a
        className={signatureStyles.signature__link}
        href="https://creativecommons.org/licenses/by/4.0/"
      >
        CC BY 4.0
      </a>
    </div>
  );
};
