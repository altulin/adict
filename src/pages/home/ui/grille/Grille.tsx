import clsx from "clsx";
import { FC, useEffect } from "react";
import style from "./Grille.module.scss";
import Icon from "@/shared/images/sprite/promo.svg";
import { Head } from "@/widgets/head";
import { initGLGrid } from "./model/grid";

const Grille: FC = () => {
  useEffect(() => {
    initGLGrid("grille", false);
  }, []);

  return (
    <section className={clsx(style.grille)}>
      <div className={clsx(style.grille__inner, "container")}>
        <div className={clsx(style.grille__info)}>
          <Head
            label="Additional task"
            icon={Icon}
            styles={clsx(style.grille__head)}
          />

          <h2 className={clsx(style.grille__title)}>Additional task</h2>

          <p className={clsx(style.grille__text)}>
            <span>
              We're excited to bring you an incredible Config experience,
            </span>
            <span>made possible by the support of our sponsors.</span>
          </p>
        </div>
        <div className={clsx(style.grille__content)}>
          <canvas id="grille" className={clsx(style.grille__canvas)}></canvas>
        </div>
      </div>
    </section>
  );
};
export default Grille;
