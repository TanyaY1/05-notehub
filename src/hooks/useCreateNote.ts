import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../services/noteService";

export default function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
}