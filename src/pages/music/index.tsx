import { EPages } from "../../helper/types/pages";
import { useCustomRoute } from "../../hooks/useRoute";
import Favorite from "../../components/Favorite";
import Rate from "../../components/Rate";

import { useGetMusic } from "../../hooks/useGetMusic";

import Audio from "../../components/Audio";

export default function Music() {
   const { selectedMusicTitle, changePage } = useCustomRoute();

   if (!selectedMusicTitle) changePage(EPages.musicListPage, "");

   const { data: music, isLoading } = useGetMusic(selectedMusicTitle);

   if (isLoading) return <div>loading...</div>;
   if (!music) return <div></div>;

   return (
      <div className="w-full px-3 border-x-2 border-slate-400 ">
         <div className="flex flex-col gap-2 items-center w-full">
            {/* MUSIC TITLE */}
            <h1 className="w-full text-center text-xl font-bold select-none italic hover:text-purple-600 transition-03 cursor-pointer">
               {music?.title}
            </h1>
            {/* MUSIC IMAGE */}
            <div className="w-full max-w-md max-h-96 relative rounded-lg">
               <div className="absolute right-1 bottom-1">
                  <Favorite
                     title={music.title}
                     favorite={music.favorite}
                     extraClassName="text-5xl text-white hover:text-slate-500"
                  />
               </div>
               <img src={music?.cover} alt="" className="w-full max-w-lg max-h-96 object-cover shadow-xl rounded-lg" />
            </div>
            <Audio audio={music.audio} />
            <div className="relative w-full flex flex-row justify-center items-center">
               <Rate extraClassForIcons="text-4xl text-slate-600" rate={music.rate} title={selectedMusicTitle} />
            </div>
         </div>
      </div>
   );
}
