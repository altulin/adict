import clsx from "clsx";
import { FC } from "react";
import style from "./Header.module.scss";
import { ILinkOut } from "@/widgets/link";
import { EnumRoutes } from "@/shared/types";
import { useLocation } from "react-router";
import { SpriteSVG } from "@/shared/ui";
import Logo from "@/shared/images/sprite/logo.svg";
import { HashLink } from "react-router-hash-link";

const Header: FC = () => {
  const { pathname } = useLocation();

  const isMain = pathname === `${EnumRoutes.MAIN}`;
  const isSpeakers = pathname === `/${EnumRoutes.SPEAKERS}`;
  const isRegistration = pathname === `/${EnumRoutes.REGISTRATION}`;

  // console.log(pathname);

  return (
    <header
      className={clsx(
        style.header,
        isSpeakers && style["header--speakers"],
        isRegistration && style["header--registration"],
      )}
    >
      <div className={clsx(style.header__inner, "container")}>
        {isMain ? (
          <p className={clsx(style.header__text)}>
            <span>Figma’s conference for people</span>
            <span>who build products</span>
          </p>
        ) : (
          <HashLink
            to={`${EnumRoutes.MAIN}#top`}
            className={clsx(style.header__logo)}
          >
            <SpriteSVG
              icon={Logo}
              className={clsx(
                style.header__logo,
                isSpeakers && style["header__logo--speakers"],
                isRegistration && style["header__logo--registration"],
              )}
            />
          </HashLink>
        )}

        <ILinkOut
          label="Speakers"
          to={`/${EnumRoutes.SPEAKERS}`}
          className={clsx(
            style.header__btn,
            isSpeakers && style["header__btn--speakers"],
          )}
        />

        <HashLink
          to={`/${EnumRoutes.REGISTRATION}#top`}
          className={clsx(
            style.header__link,
            isSpeakers && style["header__link--speakers"],
          )}
          smooth={true}
        >
          <span>Get tickets</span>
        </HashLink>
      </div>
    </header>
  );
};
export default Header;
