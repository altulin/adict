import clsx from "clsx";
import { FC, useRef } from "react";
import style from "../Config.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Letter } from "../types";
import LayoutLetter from "./LayoutLetter";

const LetterC: FC<Letter> = ({ duration }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const el = useRef(null);

  const MAIN = `.${style.letter_c__main}`;
  const SQUARE = `.${style.letter_c__square}`;

  useGSAP(
    () => {
      tl.current
        .set(SQUARE, { x: "1rem", rotation: 20 })
        .to(MAIN, {
          rotate: -180,
          scale: 0,
          duration: duration,
          ease: "power1.in",
        })
        .to(
          SQUARE,
          {
            opacity: 1,
            width: "60%",
            duration: duration,
            ease: "power1.out",
          },
          "<",
        )
        .to(
          SQUARE,
          { borderRadius: "25%", rotation: 45, duration: duration * 0.75 },
          `>${duration}`,
        )
        .to(
          SQUARE,
          { borderRadius: "50%", rotation: 20, duration: duration },
          `>${duration}`,
        )
        .to(SQUARE, {
          opacity: 0,
          width: "0%",
          duration: duration,
          ease: "power1.in",
        })
        .to(
          MAIN,
          { rotate: 0, scale: 1, duration: duration, ease: "power1.in" },
          "<",
        );
    },
    { scope: el },
  );

  return (
    <LayoutLetter el={el} tl={tl} classes={clsx(style.letter_c)}>
      <>
        <svg
          width="193"
          height="210"
          viewBox="0 0 193 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_c__main)}
        >
          <path
            d="m145.984.215 46.826 32.507-46.826 49.535-21.478-15.286h-23.413L77.68 82.257l-5.418 22.445 5.418 23.413 23.413 15.287h23.413l21.478-15.287 46.826 48.568-46.826 33.281H77.68l-53.986-39.473L.281 104.702 23.694 38.14 77.68.215h68.304z"
            fill="#252525"
          />
        </svg>

        <span className={clsx(style.letter_c__square)}></span>
      </>
    </LayoutLetter>
  );
};
export default LetterC;
