import { describe, test, expect } from "@jest/globals";
import { renderHook, waitFor } from "@testing-library/react";
import { useRate } from "../useRate";

// import helper function for test
import { getDataFromReactQuery, sendRequest, wrapper } from "../../helper/test/music";

type MusicTypeInTest = { title: string; rate?: number };

describe("useRate", () => {
   test("check initial list, Must all rate be zero", async () => {
      const { result } = sendRequest();
      await waitFor(() => {
         const ratedItems: any = result.current.data?.filter((item: MusicTypeInTest) => item?.rate);
         expect(ratedItems).toHaveLength(0);
      });
   });
   test("check the rating after giving the rate", () => {
      sendRequest();
      const {
         result: {
            current: { handleRating },
         },
      } = renderHook(() => useRate("Oceansound"), { wrapper });

      handleRating(4);
      const data: MusicTypeInTest[] = getDataFromReactQuery();
      const ratedMusic = data.find((item: MusicTypeInTest) => item.title === "Oceansound");

      expect(ratedMusic?.rate).toBe(4);
   });
});
