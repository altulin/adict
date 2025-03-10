import clsx from "clsx";
import { FC } from "react";
import style from "./Config.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LetterC from "./ui/LetterC";
import LetterO from "./ui/LetterO";
import LetterN from "./ui/LetterN";
import LetterF from "./ui/LetterF";
import LetterI from "./ui/LetterI";
import LetterG from "./ui/LetterG";

const Config: FC = () => {
  const DURATION = 0.4;
  gsap.registerPlugin(useGSAP);

  return (
    <div className={clsx(style.config)}>
      <LetterC duration={DURATION} />
      <LetterO duration={DURATION} />
      <LetterN duration={DURATION} />
      <LetterF duration={DURATION} />
      <LetterI duration={DURATION} />
      <LetterG duration={DURATION} />
    </div>
  );
};
export default Config;
