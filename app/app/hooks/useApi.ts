import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import { addUser, fetchData } from "../lib/api";
import type { User } from "../components/UserData";

export const useUsers = (
  initialData?: User[]
): UseQueryResult<User[], Error> => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchData(),
    initialData, // ✅ Use server-fetched data as initial data
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    // Don't throw errors to Next.js error boundary
    throwOnError: false,
  });
};
