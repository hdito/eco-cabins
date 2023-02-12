import linkStyles from "@/styles/link.module.scss";
import { rubik } from "@/fonts/rubik";

export interface LinkProps {
  url: string;
  title: string;
  type: "primary" | "secondary" | "ghost";
  className?: string;
}

export const CustomLink = ({
  title,
  url,
  type,
  className,
}: LinkProps): JSX.Element => {
  return (
    <a
      href={url}
      className={`${rubik.className} ${linkStyles.link} ${
        type === "primary"
          ? linkStyles["link--primary"]
          : type === "secondary"
          ? linkStyles["link--secondary"]
          : linkStyles["link--ghost"]
      } ${className ? className : ""}`}
    >
      {title}
    </a>
  );
};
