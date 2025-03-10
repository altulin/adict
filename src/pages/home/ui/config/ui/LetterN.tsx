import clsx from "clsx";
import { FC, useRef } from "react";
import style from "../Config.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Letter } from "../types";
import LayoutLetter from "./LayoutLetter";

const LetterN: FC<Letter> = ({ duration }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const el = useRef(null);

  const MAIN = `.${style.letter_n__inner}`;

  useGSAP(
    () => {
      tl.current
        .to(MAIN, {
          height: "62%",
          width: "55%",
          duration: duration * 2,
        })
        .to(MAIN, {
          rotation: 45,
          width: "62%",
          duration: duration,
          delay: duration * 0.5,
        })
        .to(MAIN, {
          rotation: 0,
          width: "55%",
          duration: duration,
          delay: duration * 0.5,
        })
        .to(MAIN, {
          height: "100%",
          width: "89%",
          duration: duration,
        });
    },
    { scope: el },
  );

  return (
    <LayoutLetter el={el} tl={tl} classes={clsx(style.letter_n)}>
      <span className={clsx(style.letter_n__inner)}>
        <svg
          width="111"
          height="88"
          viewBox="0 0 111 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_n__up)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M110.678.504H.772v86.88h35.99c1.794-8.832 9.602-15.48 18.963-15.48s17.17 6.648 18.963 15.48h35.99V.504z"
            fill="#252525"
          />
        </svg>

        <svg
          width="72"
          height="127"
          viewBox="0 0 72 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_n__left)}
        >
          <path fill="#252525" d="M.169.709h71.207v125.772H.169z" />
        </svg>

        <svg
          width="72"
          height="127"
          viewBox="0 0 72 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_n__right)}
        >
          <path fill="#252525" d="M.075.709h71.207v125.772H.075z" />
        </svg>
      </span>
    </LayoutLetter>
  );
};
export default LetterN;
