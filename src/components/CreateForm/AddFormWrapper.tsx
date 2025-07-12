"use client";
import useCreateFormStore from "@/store/useCreateFormStore";
import { useEffect } from "react";

export default function AddFormWrapper() {
  const resetForm = useCreateFormStore((state) => state.resetForm);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return null;
}
