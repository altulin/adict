import clsx from "clsx";
import style from "./Video.module.scss";
import { FC } from "react";
import imgWebp from "@/shared/images/video/main.webp";
import img from "@/shared/images/video/main.png";

const Video: FC = () => {
  return (
    <section className={clsx(style.video)}>
      <div className={clsx(style.video__inner)}>
        <figure className={clsx(style.video__figure)}>
          <picture>
            <source type="image/webp" srcSet={imgWebp} />
            <img
              className={clsx(style.video__img)}
              src={img}
              alt="location"
              width="1440"
              height="720"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
};
export default Video;
