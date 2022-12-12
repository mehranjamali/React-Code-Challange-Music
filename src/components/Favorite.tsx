import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useFavorite } from "../hooks/useFavorite";

type FavoriteProps = {
   title: string;
   favorite?: boolean;
   extraClassName?: string;
};

export default function Favorite({ title, favorite = false, extraClassName = "text-xl" }: FavoriteProps) {
   const { handleFavorite } = useFavorite();

   return (
      <div className="" onClick={() => handleFavorite(title)}>
         {favorite ? (
            <AiFillHeart className={` text-slate-700 hover:cursor-pointer transition-03 ${extraClassName}`} />
         ) : (
            <AiOutlineHeart
               className={` text-slate-500 hover:cursor-pointer hover:text-slate-900 transition-03 ${extraClassName}`}
            />
         )}
      </div>
   );
}
