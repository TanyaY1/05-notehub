import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";
const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const noteHubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

console.log(import.meta.env.VITE_NOTEHUB_TOKEN);

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export async function fetchNotes({
  page,
  perPage,
  search,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const response = await noteHubApi.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      perPage,
      search,
    },
  });

  return response.data;
}

export async function createNote(payload: CreateNotePayload): Promise<Note> {
  const response = await noteHubApi.post<Note>("/notes", payload);
  return response.data;
}

export async function deleteNote(noteId: string): Promise<Note> {
  const response = await noteHubApi.delete<Note>(`/notes/${noteId}`);
  return response.data;
}