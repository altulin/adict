import { EnumRoutes } from "@/shared/types";

interface ILink {
  title: string;

  list: {
    label: string;
    link?: string;
    isArr?: boolean;
  }[];
}

export const links: ILink[] = [
  {
    title: "Menu",
    list: [
      {
        label: "Speakers",
        link: `/${EnumRoutes.SPEAKERS}#top`,
      },
      {
        label: "Get tickets",
        link: `/${EnumRoutes.REGISTRATION}#top`,
      },
    ],
  },
  {
    title: "Resources",

    list: [
      {
        label: "Why attend",
        isArr: true,
      },
      {
        label: "FAQ",
      },
      {
        label: "Sponsors",
      },
      {
        label: "Hotels",
        isArr: true,
      },
      {
        label: "Visa letters",
        isArr: true,
      },
      {
        label: "Code of conduct",
        isArr: true,
      },
    ],
  },
  {
    title: "Follow",

    list: [
      {
        label: "x",
        isArr: true,
      },

      {
        label: "LinkedIn",
        isArr: true,
      },
      {
        label: "Instagram",
        isArr: true,
      },
      {
        label: "YouTube",
        isArr: true,
      },
    ],
  },
];
