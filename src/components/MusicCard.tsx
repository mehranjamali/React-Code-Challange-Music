import { Music } from "../helper/types/music";
// import { Link } from "react-router-dom";
import { msToMinutesAndSeconds } from "../utils/msToMinutesAndSeconds";
import { AiFillPlayCircle } from "react-icons/ai";
import Rate from "./Rate";
import CardFooter from "./CardFooter";
import { useCustomRoute } from "../hooks/useRoute";
import { EPages } from "../helper/types/pages";

type MusicItemProps = {
   music: Music;
};

export default function MusicItem({ music }: MusicItemProps) {
   const { changePage } = useCustomRoute();
   return (
      <div
         data-name="music-item-container"
         className="p-2 pb-0 mb-2 hover:shadow-xl shadow-black hover:bg-white  group/item transition-03 border border-slate-200"
      >
         <div data-name="music-item-card" className="flex flex-col">
            <div
               data-name="music-item-image"
               className="relative overflow-hidden w-full max-h-52  shadow-xl cursor-pointer"
            >
               {/* RATE COMPONENT */}
               <div className="absolute top-2 left-2 flex z-50">
                  <Rate rate={music.rate} title={music.title} />
               </div>
               {/* DURATION */}
               <div className="absolute bottom-2 right-0 w-12 py-0.5 text-center flex z-50 bg-slate-800/50 text-white ">
                  <p className="mx-auto">{msToMinutesAndSeconds(music.totalDurationMs)}</p>
               </div>
               {/* IMAGE */}
               <div className="" onClick={() => changePage(EPages.musicPage, music.title)}>
                  <img src={music.cover} alt="cover" className="w-full max-h-52 object-cover " />
               </div>
               {/* PLAY ICON */}
               <div
                  className="w-fit absolute -bottom-24 group-hover/item:bottom-0 transition-02 z-50"
                  onClick={() => changePage(EPages.musicPage, music.title)}
               >
                  <AiFillPlayCircle className="w-20 h-20 text-slate-900/70" />
               </div>
            </div>
            {/* CardFooter COMPONENT */}
            <CardFooter title={music.title} favorite={music.favorite} />
         </div>
      </div>
   );
}
