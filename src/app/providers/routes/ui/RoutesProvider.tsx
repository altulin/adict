import { PageHome } from "@/pages/home";
import Registration from "@/pages/registration";
import Speakers from "@/pages/speakers";
import { EnumRoutes } from "@/shared/types";
import { BaseLayout } from "@/widgets/layouts";

import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const RoutesProviderFC: FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: EnumRoutes.MAIN,
        element: <BaseLayout />,
        children: [
          {
            path: "/",
            element: <PageHome />,
          },
          {
            path: `/${EnumRoutes.SPEAKERS}`,
            element: <Speakers />,
          },
          {
            path: `/${EnumRoutes.REGISTRATION}`,
            element: <Registration />,
          },
        ],
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
    // { basename: import.meta.env.BASE_URL },
  );

  return <RouterProvider router={router} />;
};
export default RoutesProviderFC;
