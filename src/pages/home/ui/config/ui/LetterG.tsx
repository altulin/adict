import clsx from "clsx";
import { FC, useRef } from "react";
import style from "../Config.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Letter } from "../types";
import LayoutLetter from "./LayoutLetter";

const LetterG: FC<Letter> = ({ duration }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const el = useRef(null);

  const INNER = `.${style.letter_g__inner}`;
  const TOP = `.${style.letter_g__top}`;
  const BOTTOM = `.${style.letter_g__bottom}`;

  useGSAP(
    () => {
      tl.current
        .to(TOP, {
          x: "13%",
          y: "13%",
          duration: duration * 2,
          ease: "power1.out",
        })
        .to(
          BOTTOM,
          {
            x: "-25%",
            y: "-25%",
            duration: duration * 2,
            ease: "power1.out",
          },
          "<",
        )
        .to(INNER, {
          rotate: 45,
          duration: duration * 1.5,
        })
        .to(INNER, {
          rotate: 0,
          duration: duration * 1.5,
        })
        .to(TOP, {
          x: "0%",
          y: "0%",
          duration: duration,
          ease: "power1.out",
        })
        .to(
          BOTTOM,
          {
            x: "0%",
            y: "0%",
            duration: duration,
            ease: "power1.out",
          },
          "<",
        );

      // .to(MAIN, {
      //   height: "62%",
      //   width: "55%",
      //   duration: duration * 2,
      // })
      // .to(MAIN, {
      //   rotation: 45,
      //   width: "62%",
      //   duration: duration,
      //   delay: duration * 0.5,
      // })
      // .to(MAIN, {
      //   rotation: 0,
      //   width: "55%",
      //   duration: duration,
      //   delay: duration * 0.5,
      // })
      // .to(MAIN, {
      //   height: "100%",
      //   width: "89%",
      //   duration: duration,
      // });
    },
    { scope: el },
  );

  return (
    <LayoutLetter el={el} tl={tl} classes={clsx(style.letter_g)}>
      <span className={clsx(style.letter_g__inner)}>
        <svg
          width="96"
          height="97"
          viewBox="0 0 96 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_g__bottom)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M95.328.442H48.115V48.43H.128v47.6h95.2V.442z"
            fill="#252525"
          />
        </svg>

        <svg
          width="159"
          height="159"
          viewBox="0 0 159 159"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_g__top)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.836.15h157.893v158.279l-.001-47.6-47.6 47.6H.836V.149zm50.696 79.14c0-15.496 12.561-28.058 28.057-28.058 15.495 0 28.057 12.562 28.057 28.057 0 15.496-12.562 28.057-28.057 28.057-15.496 0-28.057-12.561-28.057-28.057z"
            fill="#252525"
          />
        </svg>
      </span>
    </LayoutLetter>
  );
};
export default LetterG;
