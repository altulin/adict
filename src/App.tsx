import { FC } from "react";
import { RoutesProviderFC } from "@/app/providers/routes";
import "normalize.css";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

import "@/app/styles/style.scss";

const App: FC = () => {
  return <RoutesProviderFC />;
};

export default App;
