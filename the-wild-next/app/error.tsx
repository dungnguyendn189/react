"use client";

import { FC } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg rounded-lg hover:bg-accent-600 transition"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
};

export default ErrorPage;
