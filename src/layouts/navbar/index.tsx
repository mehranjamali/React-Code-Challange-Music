import { TfiAngleLeft } from "react-icons/tfi";
import { EPages } from "../../helper/types/pages";
import { useCustomRoute } from "../../hooks/useRoute";

export default function Navbar() {
   const { changePage, page } = useCustomRoute();
   return (
      <div className="mb-4 w-full">
         <div className="flex justify-between items-center p-2 shadow-xl border-x-2 border-slate-300">
            {page === EPages.musicPage ? (
               <button className="p-1 pr-3" onClick={() => changePage(EPages.musicListPage, "")}>
                  <TfiAngleLeft />
               </button>
            ) : (
               <div></div>
            )}
            <div className="text-lg font-semibold">{page}</div>
         </div>
         <div className="h-0.25 bg-slate-300 w-full mx-auto"></div>
      </div>
   );
}
