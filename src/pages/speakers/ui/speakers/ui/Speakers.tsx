import clsx from "clsx";
import { FC } from "react";
import style from "./Speakers.module.scss";
import { Head } from "@/widgets/head";
import Icon from "@/shared/images/sprite/speak.svg";
import { speakers } from "../model";

const Speakers: FC = () => {
  return (
    <section className={clsx(style.speakers)}>
      <div className={clsx(style.speakers__inner, "container")}>
        <Head
          icon={Icon}
          label="the lineup"
          styles={clsx(style.speakers__head)}
        />

        <p className={clsx(style.speakers__title)}>
          <span>More than 75 speakers from around the globe will</span>
          <span>join us at Config 2024 to share how they’re</span>
          <span>thinking, what they’re making, and what's next.</span>
        </p>

        <p className={clsx(style.speakers__text)}>
          <span>Attendees will leave feeling more connected to a</span>
          <span>community of builders and to the future of product</span>
          <span>development.</span>
        </p>

        <ul className={clsx(style.speakers__list)}>
          {speakers.map((item, i) => (
            <li className={clsx(style.speakers__item, style.speaker)} key={i}>
              <figure
                className={clsx(style.speaker__figure)}
                style={{
                  backgroundImage: `url(${new URL(`./assets/${i}.jpg`, import.meta.url).href})`,
                }}
              ></figure>

              <div className={clsx(style.speaker__content)}>
                <h3 className={clsx(style.speaker__title)}>{item.name}</h3>
                <span className={clsx(style.speaker__sex)}>{item.sex}</span>
                <span className={clsx(style.speaker__skill)}>{item.skill}</span>

                {item.isLeader && (
                  <span className={clsx(style.speaker__leader)}>
                    LEADERSHIP COLLECTIVE
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <button className={clsx(style.speakers__btn)}>
          <span>load more</span>
        </button>
      </div>
    </section>
  );
};
export default Speakers;
