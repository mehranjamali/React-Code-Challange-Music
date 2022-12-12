import { describe, test, expect } from "@jest/globals";
import { renderHook, waitFor } from "@testing-library/react";
import { useFavorite } from "../useFavorite";

// import helper function for test
import { getDataFromReactQuery, sendRequest, wrapper } from "../../helper/test/music";

type MusicTypeInTest = { title: string; favorite?: boolean };

describe("useFavorite", () => {
   describe("we must have only one favorite music in the list", () => {
      test("check Initial list", async () => {
         const { result } = sendRequest();
         await waitFor(() => expect(result.current.data).toHaveLength(3));
      });
      test("check Favorite", () => {
         sendRequest();
         const {
            result: {
               current: { handleFavorite },
            },
         } = renderHook(() => useFavorite(), { wrapper });

         handleFavorite("Nightlife");
         handleFavorite("Waking Me");
         handleFavorite("Oceansound");
         const data: MusicTypeInTest[] = getDataFromReactQuery();
         const favorite = data.filter((item: MusicTypeInTest) => item?.favorite === true);

         expect(favorite).toHaveLength(1);
      });
      test("check non-Favorite", () => {
         sendRequest();
         const {
            result: {
               current: { handleFavorite },
            },
         } = renderHook(() => useFavorite(), { wrapper });

         handleFavorite("Nightlife");
         handleFavorite("Oceansound");
         const data: MusicTypeInTest[] = getDataFromReactQuery();
         const nonFavorite = data.filter((item: MusicTypeInTest) => item?.favorite !== true);

         expect(nonFavorite).toHaveLength(2);
      });
   });
});
