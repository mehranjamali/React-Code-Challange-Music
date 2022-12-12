import MusicCard from "../../components/MusicCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllMusic } from "./services";

export default function MusicList() {
   const { data } = useQuery({ queryKey: ["all-music"], queryFn: fetchAllMusic, staleTime: 60000 * 60 });

   return (
      <div className="w-full flex justify-center items-center">
         <div className="w-full max-w-sm flex flex-col px-3 border-x-2 border-slate-400">
            {data?.map((music: any, index: number) => {
               return (
                  <div key={index} className="group">
                     <MusicCard music={music} />
                     <div className="h-0.25 rounded-2xl bg-slate-400 mx-auto w-40 mb-2 group-last:h-0"></div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
