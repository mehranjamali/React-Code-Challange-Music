
type BarProps = {
   currentTime: any;
   duration: any;
   onTimeUpdate: any;
};

export default function Bar({ currentTime, duration, onTimeUpdate }: BarProps) {
   const curPercentage = (currentTime / duration) * 100;



   function calcClickedTime(e: any) {
      const clickPositionInPage = e.pageX;
      const bar: any = document.querySelector(".bar__progress");
      const barStart = bar.getBoundingClientRect().left + window.scrollX;
      const barWidth = bar.offsetWidth;
      const clickPositionInBar = clickPositionInPage - barStart;
      const timePerPixel = duration / barWidth;
      return timePerPixel * clickPositionInBar;
   }

   function handleTimeDrag(e: any) {
      onTimeUpdate(calcClickedTime(e));

      const updateTimeOnMove = (eMove: any) => {
         onTimeUpdate(calcClickedTime(eMove));
      };

      document.addEventListener("mousemove", updateTimeOnMove);

      document.addEventListener("mouseup", () => {
         document.removeEventListener("mousemove", updateTimeOnMove);
      });
   }

   return (
      <div className="select-none w-full">
         <div
            className="flex-1 rounded-xl h-3 mx-1 cursor-pointer border border-slate-300 shadow bar__progress flex items-center"
            style={{
               background: `linear-gradient(to right, rgb(71 85 105) ${curPercentage}%, white 0)`,
            }}
            onMouseDown={(e) => handleTimeDrag(e)}
         >
            <span
               className="relative h-4 w-4 bg-gray-500 border rounded-full  "
               style={{ left: `${curPercentage - 2}%` }}
            />
         </div>
         <div></div>
      </div>
   );
}
