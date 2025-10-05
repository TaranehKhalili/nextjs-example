import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchData } from "../lib/api";
import { User } from "../components/UserData";

export const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchData(),
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    // Don't throw errors to Next.js error boundary
    throwOnError: false,
  });
};
