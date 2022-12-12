import { createContext, ReactNode, useContext, useState } from "react";
import { EPages } from "../helper/types/pages";
import { RouteContextType } from "../helper/types/routeContext";

const RouteContext = createContext({} as RouteContextType);

type RouteProviderProps = {
   children: ReactNode;
};
export default function RouteProvider({ children }: RouteProviderProps) {
   const [page, setPage] = useState<EPages>(EPages.musicListPage);
   const [selectedMusicTitle, setSelectedMusicTitle] = useState<string>("");

   const changePage = (page: EPages, title: string = "") => {
      setPage(page);
      setSelectedMusicTitle(title);
   };

   return <RouteContext.Provider value={{ page, changePage, selectedMusicTitle }}>{children}</RouteContext.Provider>;
}

export const useCustomRoute = () => useContext(RouteContext);
