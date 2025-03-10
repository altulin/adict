import clsx from "clsx";
import { FC, useRef } from "react";
import style from "../Config.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Letter } from "../types";
import LayoutLetter from "./LayoutLetter";

const LetterO: FC<Letter> = ({ duration }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const el = useRef(null);

  const MAIN = `.${style.letter_o__main}`;
  const SQUARE = `.${style.letter_o__square}`;

  useGSAP(
    () => {
      tl.current
        .set(SQUARE, { rotation: 45 })
        .to(MAIN, {
          rotate: 180,
          scale: 0,
          duration: duration * 2.5,
          ease: "power1.in",
        })
        .to(
          SQUARE,
          {
            opacity: 1,
            width: "60%",
            duration: duration * 2.5,
            ease: "power1.out",
          },
          `<${duration * 0.5}`,
        )
        .to(
          SQUARE,
          {
            rotation: 90,
            width: "30%",
            duration: duration * 2,
          },
          `>${duration}`,
        )
        .to(
          SQUARE,
          {
            opacity: 0,
            rotation: 45,
            width: 0,
            duration: duration * 2.5,
          },
          `>${duration}`,
        )
        .to(MAIN, { rotate: 0, scale: 1, duration: duration * 2.5 }, "<");
    },
    { scope: el },
  );

  return (
    <LayoutLetter el={el} tl={tl} classes={clsx(style.letter_o)}>
      <>
        <svg
          width="208"
          height="208"
          viewBox="0 0 208 208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_o__main)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m76.653.589 52.629-.407.316 40.84 28.879-28.879 37.216 37.216L167.3 77.752h40.154v52.631H167.3l28.393 28.394-37.215 37.216-27.898-27.898.305 39.452-52.63.407-.315-40.842-28.88 28.881-37.216-37.216 28.393-28.394H.083v-52.63h40.154L11.844 49.358 49.06 12.143l27.898 27.899L76.653.589zm66.291 103.337L103.827 64.81 64.71 103.926l39.117 39.117 39.117-39.117z"
            fill="#252525"
          />
        </svg>
        <span className={clsx(style.letter_o__square)}></span>
      </>
    </LayoutLetter>
  );
};
export default LetterO;
