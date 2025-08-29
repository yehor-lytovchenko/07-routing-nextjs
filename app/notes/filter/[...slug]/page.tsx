import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesCLient from "./Notes.client";

interface NotesProps {
  params: Promise<{ slug: string }>;
}

export default async function Notes({ params }: NotesProps) {
  const { slug } = await params;
  console.log(slug[0]);
  const tag = slug[0] === "All notes" ? "" : slug[0];
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(1, "", tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesCLient tag={tag} />
    </HydrationBoundary>
  );
}
