import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useRenameFile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["rename-file"],
    mutationFn: async ({ id, name }: { id: string; name: string }) => {
      const res = await axios.patch(`/api/file/${id}`, { name });
      if (res.status !== 200) {
        throw new Error("Error renaming file");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
  });
};
