import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";
import Time from "./time";

import useMusicPlayer from "../../hooks/useMusicPlayer";

type AudioProps = {
   audio: string;
};

export default function Audio({ audio }: AudioProps) {
   const { currentTime, duration, playing, setPlaying, setClickedTime } = useMusicPlayer();
   return (
      <div className=" w-full ">
         <audio id="audio">
            <source src={audio} />
            Your browser does not support the <code>audio</code> element.
         </audio>
         <div className="flex flex-row justify-between items-center gap-2 ">
            {playing ? (
               <Pause handlePlaying={() => setPlaying(false)} />
            ) : (
               <Play handlePlaying={() => setPlaying(true)} />
            )}
            <Bar currentTime={currentTime} duration={duration} onTimeUpdate={(time: any) => setClickedTime(time)} />
         </div>
         <div className="text-center py-1">
            <Time currentTime={currentTime} duration={duration} />
         </div>
      </div>
   );
}
