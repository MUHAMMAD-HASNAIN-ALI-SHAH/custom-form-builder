"use client";
import useFormStore from "@/store/useFormStore";
import { useEffect } from "react";

export default function AddFormWrapper() {
  const resetForm = useFormStore((state) => state.resetForm);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return null;
}
