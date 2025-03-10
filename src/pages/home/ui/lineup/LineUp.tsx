import clsx from "clsx";
import { FC } from "react";
import style from "./LineUp.module.scss";
import { Head } from "@/widgets/head";
import Icon from "@/shared/images/sprite/lineup.svg";
import { EnumRoutes } from "@/shared/types";
import { Link } from "react-router";
import { counts } from "./model";

const LineUp: FC = () => {
  return (
    <section className={clsx(style.lineup)}>
      <div className={clsx(style.lineup__inner, "container")}>
        <div className={clsx(style.lineup__info)}>
          <Head
            icon={Icon}
            label="the lineup"
            styles={clsx(style.lineup__head)}
          />

          <p className={clsx(style.lineup__text)}>
            2024 will be the most exciting Config yet, with programming designed
            to connect a dynamic community of builders to the future of product
            development.
          </p>

          <Link
            to={`/${EnumRoutes.REGISTRATION}`}
            className={clsx(style.lineup__link)}
          >
            <span>see all speakers</span>
          </Link>
        </div>

        <div className={clsx(style.lineup__counters, style.counters)}>
          {counts.map((item, i) => (
            <div key={i} className={clsx(style.counters__item)}>
              <span className={clsx(style.counters__count)}>{item.count}</span>
              <span className={clsx(style.counters__plus)}>+</span>
              <span className={clsx(style.counters__name)}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LineUp;
