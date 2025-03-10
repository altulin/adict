import clsx from "clsx";
import { FC } from "react";
import style from "./Head.module.scss";
import { SpriteSVG } from "@/shared/ui";

interface IHead {
  label?: string;
  icon: string;
  styles?: string;
}

const Head: FC<IHead> = ({ label, icon, styles }) => {
  return (
    <div className={clsx(style.head, styles)}>
      <SpriteSVG icon={icon} className={clsx(style.head__logo)} />
      {label && <span className={clsx(style.head__label)}>{label}</span>}
    </div>
  );
};
export default Head;
