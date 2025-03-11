import { FC } from "react";
import style from "./Link.module.scss";
import clsx from "clsx";
import { SpriteSVG } from "@/shared/ui";
import Icon from "@/shared/images/sprite/arr.svg";
import { HashLink } from "react-router-hash-link";

interface ILinkOut {
  label: string;
  to: string;
  type?: "footer";
  isArr?: boolean;
  className?: string;
}

const LinkOut: FC<ILinkOut> = ({ label, to, type, isArr, className }) => {
  return (
    <HashLink
      to={to}
      className={clsx(style.link, style[`link--${type}`], className)}
      smooth={true}
    >
      <span className={clsx(style.link__label)}>{label}</span>
      {isArr && <SpriteSVG icon={Icon} className={clsx(style.link__arr)} />}
    </HashLink>
  );
};
export default LinkOut;
