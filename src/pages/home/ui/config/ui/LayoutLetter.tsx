import clsx from "clsx";
import { FC, JSX, useState } from "react";
import style from "../Config.module.scss";

interface ILayoutLetter {
  el: React.RefObject<HTMLSpanElement | null>;
  children: JSX.Element;
  classes?: string;
  tl: React.RefObject<GSAPTimeline>;
}

const LayoutLetter: FC<ILayoutLetter> = ({ el, children, classes, tl }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handle = () => {
    tl.current.restart().then(() => setIsDisabled(false));
    setIsDisabled(true);
  };

  return (
    <span
      ref={el}
      className={clsx(
        style.config__letter,
        isDisabled && style["config__letter--disabled"],
        classes,
      )}
      onMouseMove={handle}
    >
      {children}
    </span>
  );
};
export default LayoutLetter;
