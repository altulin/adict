import clsx from "clsx";
import { FC } from "react";
import style from "./Footer.module.scss";
import { SpriteSVG } from "@/shared/ui";
import IconFigma from "@/shared/images/sprite/figma.svg";
import { links } from "./model";
import LinkOut from "../link/ui/Link";
import img from "@/shared/images/config.png";
import IconCopy from "@/shared/images/sprite/copy.svg";
import IconCopy2 from "@/shared/images/sprite/copy_2.svg";

const Footer: FC = () => {
  return (
    <footer className={clsx(style.footer)}>
      <div className={clsx(style.footer__line)}></div>

      <div className={clsx(style.footer__content)}>
        <div className={clsx(style.footer__inner, "container")}>
          <div className={clsx(style.footer__top)}>
            <a href="#" className={clsx(style.footer__figma)}>
              <SpriteSVG icon={IconFigma} />
            </a>

            <div className={clsx(style.footer__links, style.links)}>
              {links.map((item, i) => {
                return (
                  <div key={i} className={clsx(style.links__item)}>
                    <p className={clsx(style.links__title)}>{item.title}</p>

                    <div className={clsx(style.links__list)}>
                      {item.list.map((item, i) => {
                        return (
                          <LinkOut
                            key={i}
                            label={item.label}
                            to={item.link || "#"}
                            type="footer"
                            isArr={item.isArr}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={clsx(style.footer__bottom)}>
            <figure className={clsx(style.footer__figure)}>
              <img src={img} alt="img" width={1260} height={246} />
            </figure>
          </div>

          <div className={clsx(style.footer__copy)}>
            <SpriteSVG
              icon={IconCopy}
              className={clsx(style.footer__copy_icon)}
            />
            <span>English</span>
            <SpriteSVG
              icon={IconCopy2}
              className={clsx(style.footer__copy_icon_2)}
            />
            <span>Cookie settings</span>
            <span>/</span>
            <span>© Figma 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
