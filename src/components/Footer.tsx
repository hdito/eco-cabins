import Image from "next/image";
import footerStyles from "@/styles/footer.module.scss";
import { rubik } from "./rubik";

export const Footer = (): JSX.Element => {
  return (
    <footer className={`${rubik.className} ${footerStyles.footer}`}>
      <a className={footerStyles.footer__link} href="#">
        info@eco-cabins.com
      </a>
      <a href="#">
        <Image src="/logo.svg" width={135} height={25} alt="EcoCabins" />
      </a>
      <div className={footerStyles["footer__right-link-block"]}>
        <a className={footerStyles.footer__link} href="#">
          Cookies
        </a>
        <a className={footerStyles.footer__link} href="#">
          Privacybeleid
        </a>
      </div>
    </footer>
  );
};
