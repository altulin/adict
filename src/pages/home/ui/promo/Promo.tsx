import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { Head } from "@/widgets/head";
import Icon from "@/shared/images/sprite/promo.svg";
import Config from "../config";

const Promo: FC = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h1 className={clsx(style["promo__main-title"])}>Title</h1>
        <Head icon={Icon} styles={clsx(style.promo__head)} />

        <div className={clsx(style.promo__info, style.info)}>
          <p className={clsx(style.info__date)}>
            <span>June 26-27</span>
            <span>2024</span>
          </p>
          <p className={clsx(style.info__place)}>
            <span>Moscone Center</span>
            <span>San Francisco, CA</span>
          </p>
        </div>

        <Config />
      </div>
    </section>
  );
};
export default Promo;
