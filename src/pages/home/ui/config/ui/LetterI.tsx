import clsx from "clsx";
import { FC, useRef } from "react";
import style from "../Config.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Letter } from "../types";
import LayoutLetter from "./LayoutLetter";

const LetterI: FC<Letter> = ({ duration }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const el = useRef(null);

  const UP = `.${style.letter_i__up}`;
  const SQUARE = `.${style.letter_i__square}`;
  const CIRCLE_TOP = `.${style["letter_i__circle--top"]}`;
  const CIRCLE_BOTTOM = `.${style["letter_i__circle--bottom"]}`;

  const BOTTOM = `.${style.letter_i__bottom}`;

  useGSAP(
    () => {
      tl.current
        .to(UP, {
          y: "67%",
          duration: duration * 2,
          scale: 1.15,
          ease: "power1.inOut",
        })
        .to(
          BOTTOM,
          {
            y: "-62%",
            scale: 0,
            duration: duration * 2,
            ease: "power1.in",
          },
          "<",
        )
        .to(SQUARE, {
          duration: duration * 1,
          height: "106%",
          ease: "power1.inOut",
        })
        .to(SQUARE, {
          duration: duration,
          scale: 0,
          ease: "power1.in",
          delay: duration * 0.5,
        })
        .to(
          BOTTOM,
          {
            scale: 1,
            duration: duration,
            ease: "power1.in",
          },
          "<",
        )
        .set(SQUARE, { height: "0%" })
        .set(CIRCLE_TOP, { display: "none" })
        .to(BOTTOM, {
          duration: duration * 1.5,
          y: "12%",
          ease: "none",
          delay: duration,
        })
        .to(SQUARE, { duration: duration, scale: 1, ease: "power1.out" }, "<")
        .to(
          UP,
          {
            duration: duration * 1.5,
            ease: "none",
            y: "-12%",
          },
          "<",
        )
        .to(
          CIRCLE_BOTTOM,
          {
            borderRadius: "40%",
            duration: duration * 1.5,
          },
          "<+=0.4",
        )
        .to(BOTTOM, { y: "0%", ease: "none", duration: duration }, "<+=0.4")
        .to(
          CIRCLE_BOTTOM,
          {
            borderRadius: "50%",
            duration: duration,
          },
          "<",
        )
        .to(
          UP,
          {
            duration: duration,
            scale: 1,
            ease: "none",
            y: "0%",
          },
          "<",
        );
    },
    { scope: el },
  );

  return (
    <LayoutLetter el={el} tl={tl} classes={clsx(style.letter_i)}>
      <span className={clsx(style.letter_i__inner)}>
        <span className={clsx(style.letter_i__wrap_up)}>
          <span className={clsx(style.letter_i__up)}>
            <span className={clsx(style.letter_i__square)}>
              <span
                className={clsx(
                  style.letter_i__circle,
                  style["letter_i__circle--top"],
                )}
              ></span>
              <span
                className={clsx(
                  style.letter_i__circle,
                  style["letter_i__circle--bottom"],
                )}
              ></span>
            </span>
          </span>
        </span>

        <span className={clsx(style.letter_i__wrap_bottom)}>
          <span className={clsx(style.letter_i__bottom)}></span>
        </span>
      </span>
    </LayoutLetter>
  );
};
export default LetterI;
