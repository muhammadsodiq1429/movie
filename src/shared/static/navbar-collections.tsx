import type { ReactNode } from "react";
import { BiSearch } from "react-icons/bi";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { RiHome9Fill, RiHome9Line, RiTv2Fill, RiTv2Line } from "react-icons/ri";

interface ICollectionType {
  id: number;
  path: string;
  element: ReactNode;
  activeElement?: ReactNode;
}

export const navbarCollections: ICollectionType[] = [
  {
    path: "/",
    element: <RiHome9Line />,
    id: 1,
    activeElement: <RiHome9Fill />,
  },
  {
    path: "movie",
    element: <RiTv2Line />,
    id: 2,
    activeElement: <RiTv2Fill />,
  },
  {
    path: "bookmark",
    element: <MdBookmarkBorder />,
    id: 3,
    activeElement: <MdBookmark />,
  },
  {
    path: "search",
    element: <BiSearch />,
    id: 4,
  },
];
