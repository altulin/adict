import { FC } from "react";
import Promo from "./promo";
import Video from "./video";
import Join from "./join";
import LineUp from "./lineup";
import Sponsors from "./sponsors";

const PageHome: FC = () => {
  return (
    <>
      <Promo />
      <Video />
      <Join />
      <LineUp />
      <Sponsors />
    </>
  );
};
export default PageHome;
