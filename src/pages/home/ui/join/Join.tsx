import clsx from "clsx";
import { FC } from "react";
import style from "./Join.module.scss";
import { Head } from "@/widgets/head";
import Icon from "@/shared/images/sprite/join.svg";
import { EnumRoutes } from "@/shared/types";
import { HashLink } from "react-router-hash-link";

const Join: FC = () => {
  return (
    <section className={clsx(style.join)}>
      <div className={clsx(style.join__inner, "container")}>
        <div className={clsx(style.join__info)}>
          <Head icon={Icon} label="Join us" styles={clsx(style.join__head)} />

          <h2 className={clsx(style.join__title)}>
            <span>Early bird tickets</span>
            <span>available now</span>
          </h2>

          <p className={clsx(style.join__text)}>
            <span>Register now to save 50% and be</span>
            <span>the first to reserve a seat at the</span>
            <span>most popular talks.</span>
          </p>
        </div>

        <HashLink
          to={`/${EnumRoutes.REGISTRATION}#top`}
          className={clsx(style.join__link)}
          smooth={true}
        >
          <span>Get tickets</span>
        </HashLink>
      </div>
    </section>
  );
};
export default Join;
