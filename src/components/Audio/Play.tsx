import { AiFillPlayCircle } from "react-icons/ai";

type PlayProps = {
   handlePlaying: () => void;
};

export default function Play({ handlePlaying }: PlayProps) {
   return (
      <button onClick={handlePlaying} className="w-5 h-5">
         <AiFillPlayCircle className="text-slate-600 hover:text-slate-900 transition-03 w-full h-full"/>
      </button>
   );
}
