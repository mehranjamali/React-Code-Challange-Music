import { AiFillPauseCircle } from "react-icons/ai";

type PauseProps = {
   handlePlaying: () => void;
};

export default function Pause({ handlePlaying }: PauseProps) {
   return (
      <button onClick={handlePlaying} className="w-5 h-5">
         <AiFillPauseCircle className="text-slate-600 hover:text-slate-900 transition-03 w-full h-full"/>
      </button>
   );
}
