import React from "react";

export default function Homepage() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen">
      <h3 className="text-2xl font-bold">Welcome to My Template VTER</h3>
      <p className="text-base font-medium">
        Vite, React, Tailwind CSS and Eslint
      </p>

      <a
        className="mt-4"
        href="https://github.com/DevPlayhouse"
        target="_blank"
      >
        Go to Github
      </a>
    </div>
  );
}
