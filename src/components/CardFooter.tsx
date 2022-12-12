import Favorite from "./Favorite";

type CardFooterProps = {
   title: string;
   favorite?: boolean;
};

export default function CardFooter({ title, favorite }: CardFooterProps) {
   return (
      <div data-name="music-item-content" className="flex flex-col py-3 ">
         <div className="flex justify-between items-center">
            <div className="text-base sm:text-base font-bold flex gap-4">
               <p>{title}</p>
            </div>
            <Favorite title={title} favorite={favorite} />
         </div>
      </div>
   );
}
