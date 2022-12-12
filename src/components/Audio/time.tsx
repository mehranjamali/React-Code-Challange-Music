import moment from "moment";
import { sToMinutesAndSeconds } from "../../utils/sToMinutesAndSeconds";

type TimeProps = {
   currentTime: any;
   duration: any;
};
export default function Time({ currentTime, duration }: TimeProps) {
   function formatDuration(durationArg: any) {
      const roundedDuration = Math.round(moment.duration(durationArg, "seconds").asSeconds());
      return sToMinutesAndSeconds(roundedDuration);
   }

   return (
      <div>
         <span className="font-semibold italic text-slate-700">{formatDuration(currentTime)}</span>
         <span className="font-bold">{" / "}</span>
         <span className="font-semibold italic">{formatDuration(duration)}</span>
      </div>
   );
}
