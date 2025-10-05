"use client";

import { useEffect } from "react";

export default function ErrorDisplay({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Route-level error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        {error.message || "An unexpected error occurred"}
      </p>
      <button
        onClick={reset}
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Try again
      </button>
    </div>
  );
}
