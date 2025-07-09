"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

interface FormLinkProps {
  link: string;
  onClose: () => void;
}

const FormLink: React.FC<FormLinkProps> = ({ link, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shareable Form Link</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          Copy and share this link with others:
        </p>
        <div className="flex items-center gap-2">
          <input
            readOnly
            value={link}
            className="w-full border px-3 py-2 rounded-md text-sm text-gray-700"
          />
          <button
            onClick={handleCopy}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormLink;
