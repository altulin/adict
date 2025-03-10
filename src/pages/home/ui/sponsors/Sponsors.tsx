import clsx from "clsx";
import { FC } from "react";
import style from "./Sponsors.module.scss";
import { Head } from "@/widgets/head";
import Icon from "@/shared/images/sprite/sponsors.svg";
import { Link } from "react-router";

const Sponsors: FC = () => {
  return (
    <section className={clsx(style.sponsors)}>
      <div className={clsx(style.sponsors__inner, "container")}>
        <Head
          icon={Icon}
          label="sponsors"
          styles={clsx(style.sponsors__head)}
        />

        <h2 className={clsx(style.sponsors__title)}>
          Thank you to our sponsors
        </h2>

        <p className={clsx(style.sponsors__text)}>
          <span>
            We're excited to bring you an incredible Config experience,
          </span>
          <span>made possible by the support of our sponsors.</span>
        </p>

        <div className={clsx(style.sponsors__logos)}>
          {new Array(8).fill("").map((item, i) => (
            <a key={i} href="#" className={clsx(style.sponsors__logo)}>
              <figure
                className={clsx(style.sponsors__figure)}
                style={{
                  backgroundImage: `url(${new URL(`./assets/sponsor_${i}.jpg`, import.meta.url).href})`,
                }}
              ></figure>
            </a>
          ))}
        </div>

        <Link to={"#"} className={clsx(style.sponsors__link)}>
          <span>See all sponsors</span>
        </Link>
      </div>
    </section>
  );
};
export default Sponsors;
