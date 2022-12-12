import { QueryClient, useQueryClient } from "@tanstack/react-query";
import type { Music } from "../helper/types/music";


export const useFavorite = () => {
    const queryClient: QueryClient = useQueryClient();

    const handleFavorite = (title: string) => {
        // change specific music cache state beacuse of "favorite" changed
        const musicInCache: any = queryClient.getQueryData(["music", title]);
        if (musicInCache)
            queryClient.setQueryData(["music", title], { ...musicInCache, favorite: !musicInCache.favorite });

        // change all music list cache state beacuse of "favorite" changed
        const dataInCache: any = queryClient.getQueryData(["all-music"]);
        const updatedData = dataInCache.map((music: Music) => {
            if (music.title !== title) return { ...music, favorite: false };
            return { ...music, favorite: !music.favorite ? true : false }
        });
        queryClient.setQueryData(["all-music"], updatedData);
    };

    return { handleFavorite }
}