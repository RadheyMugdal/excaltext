import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useGetFiles = (page: string, limit: string, fileName: string) => {
  return useQuery({
    queryKey: ["files", page, limit, fileName],
    queryFn: async () => {
      const res = await axios.get(
        `/api/files?page=${page}&limit=${limit}&fileName=${fileName}`
      );
      if (res.status !== 200) {
        throw new Error("Error fetching files");
      }

      return res.data;
    },
  });
};
