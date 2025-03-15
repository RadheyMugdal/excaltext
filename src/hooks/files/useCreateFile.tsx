import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCreateFile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-file"],
    mutationFn: async ({ name }: { name: string }) => {
      const res = await axios.post("/api/files", { name });
      if (res.status !== 200) {
        throw new Error("Error creating file");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
  });
};
