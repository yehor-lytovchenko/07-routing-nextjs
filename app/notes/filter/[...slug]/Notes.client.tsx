"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import css from "./Notes.module.css";
import { useState } from "react";
import { fetchNotes } from "@/lib/api";
import { useDebouncedCallback } from "use-debounce";
import SearchBox from "@/components/SearchBox/SearchBox";
import NoteForm from "@/components/NoteForm/NoteForm";
import Modal from "@/components/Modal/Modal";
import Pagination from "@/components/Pagination/Pagination";
import NoteList from "@/components/NoteList/NoteList";

interface NotesCLientProps {
  tag: string;
}

export default function NotesCLient({ tag }: NotesCLientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["notes", currentPage, query, tag],
    queryFn: () => fetchNotes(currentPage, query, tag),
    placeholderData: keepPreviousData,
  });
  const totalPages = data?.totalPages ?? 0;

  const handleChange = useDebouncedCallback((query: string) => {
    setCurrentPage(1);
    setQuery(query);
  }, 300);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox handleChange={handleChange} />

        {isSuccess && data.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        )}

        <button onClick={openModal} className={css.button}>
          Create note +
        </button>
      </header>

      {isSuccess && data.notes.length > 0 && (
        <NoteList notes={data?.notes || []} />
      )}

      {isLoading && !data && <p>Loading...</p>}
      {isError && <p>Something went wrong.</p>}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NoteForm onCloseModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}
