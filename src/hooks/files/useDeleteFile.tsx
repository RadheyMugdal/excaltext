import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteFile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-file"],
    mutationFn: async ({ id }: { id: string }) => {
      const res = await axios.delete(`/api/file/${id}`);
      if (res.status !== 200) {
        throw new Error("Error deleting file");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
  });
};
