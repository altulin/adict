import { FC } from "react";
import style from "./Link.module.scss";
import { Link } from "react-router";
import clsx from "clsx";
import { SpriteSVG } from "@/shared/ui";
import Icon from "@/shared/images/sprite/arr.svg";

interface ILinkOut {
  label: string;
  to: string;
  type?: "footer";
  isArr?: boolean;
  className?: string;
}

const LinkOut: FC<ILinkOut> = ({ label, to, type, isArr, className }) => {
  return (
    <Link
      to={to}
      className={clsx(style.link, style[`link--${type}`], className)}
    >
      <span className={clsx(style.link__label)}>{label}</span>
      {isArr && <SpriteSVG icon={Icon} className={clsx(style.link__arr)} />}
    </Link>
  );
};
export default LinkOut;
