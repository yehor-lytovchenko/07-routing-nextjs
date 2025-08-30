"use client";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/router";

export default function NotePreviewClient() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <div>asdasd</div>
    </Modal>
  );
}
