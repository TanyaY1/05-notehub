import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchNotes } from "../services/noteService";

export default function useFetchNotes(search: string, page: number) {
  return useQuery({
    queryKey: ["notes", search, page],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: 12,
        search,
      }),
    placeholderData: keepPreviousData,
  });
}