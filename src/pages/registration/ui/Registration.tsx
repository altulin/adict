import clsx from "clsx";
import { FC } from "react";
import style from "./Registration.module.scss";
import { Head } from "@/widgets/head";
import Icon from "@/shared/images/sprite/register.svg";

const Registration: FC = () => {
  return (
    <section className={clsx(style.registration)}>
      <div className={clsx(style.registration__inner, "container")}>
        <div className={clsx(style.registration__info, style.info)}>
          <Head icon={Icon} label="Register" styles={clsx(style.info__head)} />
          <p className={clsx(style.info__text)}>
            <span>Join us in June for</span>
            <span> Config 2024.</span>
          </p>
        </div>

        <div className={clsx(style.registration__content, style.content)}>
          <p className={clsx(style.content__text)}>
            Attend in person at
            <a href="#" className={clsx(style.content__moscone)}>
              Moscone Center
            </a>
            in San Francisco. Your ticket includes access to the virtual Config
            experience too.
          </p>

          <button className={clsx(style.content__link)}>
            <h3 className={clsx(style.content__title)}>
              Single in person ticket
            </h3>
            <p className={clsx(style.content__price, style.price)}>
              <span className={clsx(style.price__old)}>$699</span>
              <span className={clsx(style.price__actual)}>$349.50</span>
            </p>

            <span className={clsx(style.content__mini)}>
              Early bird (50% off) while supplies last
            </span>
          </button>
          <button className={clsx(style.content__link)}>
            <h3 className={clsx(style.content__title)}>
              Multiple in person tickets
            </h3>

            <p className={clsx(style.content__comment)}>
              Buy 3 tickets, get 1 free! Discount applied at checkout.
            </p>

            <p className={clsx(style.content__price, style.price)}>
              <span className={clsx(style.price__old)}>$699</span>
              <span className={clsx(style.price__actual)}>$349.50</span>
              <span className={clsx(style.price__text)}>per attendee</span>
            </p>
          </button>

          <p className={clsx(style.content__subtitle)}>
            Attend virtually from anywhere.
          </p>

          <button className={clsx(style.content__link)}>
            <h3 className={clsx(style.content__title)}>Virtual</h3>
            <p className={clsx(style.content__comment)}>
              Live-streaming online, limit one virtual ticket per attendee.
            </p>
            <span className={clsx(style.price__actual)}>Free</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Registration;
