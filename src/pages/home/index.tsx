import MusicList from "../musicList";
import Music from "../music";
import { EPages } from "../../helper/types/pages";
import { useCustomRoute } from "../../hooks/useRoute";

export default function Home() {
   const { page } = useCustomRoute();
   // i handle my custom route in here
   if (page === EPages.musicListPage) return <MusicList />;
   return <Music />;
}
