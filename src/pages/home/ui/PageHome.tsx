import { FC } from "react";
import Promo from "./promo";
import Video from "./video";
import Join from "./join";
import LineUp from "./lineup";
import Sponsors from "./sponsors";
import { Grille } from "./grille";

const PageHome: FC = () => {
  return (
    <>
      <Promo />
      <Video />
      <Join />
      <LineUp />
      <Sponsors />
      <Grille />
    </>
  );
};
export default PageHome;
