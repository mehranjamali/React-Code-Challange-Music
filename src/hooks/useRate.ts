import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { Music } from "../helper/types/music";


export const useRate = (title: string) => {
    const queryClient: QueryClient = useQueryClient();

    const handleRating = (rate: number) => {
        // change music cache state beacuse of "rate" changed
        const musicInCache: any = queryClient.getQueryData(["music", title]);
        if (musicInCache) queryClient.setQueryData(["music", title], { ...musicInCache, rate: rate });

        // change all music list cache state beacuse of "rate" changed
        const dataInCache: any = queryClient.getQueryData(["all-music"]);
        const updatedData = dataInCache.map((music: Music) => {
            if (music.title === title) return { ...music, rate: rate };
            return music;
        });
        queryClient.setQueryData(["all-music"], updatedData);
    };

    return { handleRating }
}