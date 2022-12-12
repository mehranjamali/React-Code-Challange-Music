import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react";

const Client = new QueryClient();

const wrapper = ({ children }: any) => <QueryClientProvider client={Client}>{children}</QueryClientProvider>;

// START ----------> this function will used in every test
const sendRequest = () =>
   renderHook(
      () =>
         useQuery({
            queryKey: ["all-music"],
            queryFn: () => [
               {
                  title: "Oceansound",
               },
               {
                  title: "Nightlife",
               },
               {
                  title: "Waking Me",
               },
            ],
         }),
      {
         wrapper,
      }
   );
// ----------> END

// START ----------> get data from react-query cache
const { result } = renderHook(() => useQueryClient(), { wrapper });
const getDataFromReactQuery = (): any => result.current.getQueryData(["all-music"]);
// ----------> END

export { wrapper, sendRequest, getDataFromReactQuery };
