import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../services/noteService";

export default function useDeleteNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
}