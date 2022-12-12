
import { useQueryClient, useQuery } from "@tanstack/react-query";
import type { QueryClient } from "@tanstack/react-query";
import { Music as MusicType } from "../helper/types/music";


export function useGetMusic(title: string) {
    const queryClient: QueryClient = useQueryClient();

    const getMusic = () => {
        const dataInCache: any = queryClient.getQueryData(["all-music"]);
        const music = dataInCache.find((item: MusicType) => title === item.title);
        return music ?? null;
    }

    const { data, isLoading } = useQuery({ queryKey: ["music", title], queryFn: getMusic });


    return { data, isLoading }
}