import clsx from "clsx";
import { FC, useRef } from "react";
import style from "../Config.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Letter } from "../types";
import LayoutLetter from "./LayoutLetter";

const LetterF: FC<Letter> = ({ duration }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const el = useRef(null);

  const UP = `.${style.letter_f__up}`;
  const MIDDLE = `.${style.letter_f__middle}`;
  const BOTTOM = `.${style.letter_f__bottom}`;

  useGSAP(
    () => {
      tl.current
        .to(UP, {
          y: "86%",
          rotation: -45,
          duration: duration * 2,
        })
        .to(
          MIDDLE,
          {
            rotation: -135,
            duration: duration * 2,
          },
          "<",
        )
        .to(
          BOTTOM,
          {
            y: "-40%",
            x: "14%",
            opacity: 0,
            duration: duration * 0.5,
          },
          "<",
        )
        .to(UP, {
          y: "0",
          rotation: 0,
          duration: duration * 2,
          delay: duration * 0.5,
        })
        .to(
          MIDDLE,
          {
            rotation: 0,
            duration: duration * 2,
          },
          "<",
        )
        .to(
          BOTTOM,
          {
            y: "0",
            x: "0",
            opacity: 1,
            duration: duration * 1.5,
            ease: "power1.out",
          },
          "<",
        );
    },
    { scope: el },
  );

  return (
    <LayoutLetter el={el} tl={tl} classes={clsx(style.letter_f)}>
      <span className={clsx(style.letter_f__inner)}>
        <svg
          width="169"
          height="76"
          viewBox="0 0 169 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_f__up)}
        >
          <rect
            x=".101"
            y=".182"
            width="168.341"
            height="75.076"
            rx="35.41"
            fill="#252525"
          />
        </svg>
        <svg
          width="169"
          height="76"
          viewBox="0 0 169 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_f__middle)}
        >
          <rect
            x=".101"
            y=".182"
            width="168.341"
            height="75.076"
            rx="35.41"
            fill="#252525"
          />
        </svg>

        <svg
          width="77"
          height="91"
          viewBox="0 0 77 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(style.letter_f__bottom)}
        >
          <path
            d="M.1 38.513A35.41 35.41 0 0 1 20.59 6.4l5.805-2.697c23.47-10.906 50.33 6.232 50.33 32.113v19.771c0 19.556-15.853 35.41-35.41 35.41h-5.804C15.954 90.997.1 75.143.1 55.587V38.513z"
            fill="#252525"
          />
        </svg>
      </span>
    </LayoutLetter>
  );
};
export default LetterF;
