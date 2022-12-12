import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { StarType } from "../helper/types/starForUiType";

import { mapRateNumberToStar } from "../utils/mapRateNumberToStar";
import { useRate } from "../hooks/useRate";

type RateProps = {
   rate?: number;
   extraClassForIcons?: string;
   title: string;
};

export default function Rate({ rate = 0, extraClassForIcons, title }: RateProps) {
   const { handleRating } = useRate(title);
   const stars: StarType[] = mapRateNumberToStar(rate);

   return (
      <div className=" flex cursor-pointer ">
         {stars.map((item: StarType) => {
            if (item.fill)
               return (
                  <AiFillStar
                     key={item.id}
                     className={`text-yellow-300 ${extraClassForIcons}`}
                     onClick={() => handleRating(item.id)}
                  />
               );
            return (
               <AiOutlineStar
                  key={item.id}
                  className={`text-yellow-300 ${extraClassForIcons}`}
                  onClick={() => handleRating(item.id)}
               />
            );
         })}
      </div>
   );
}
