import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-5xl font-extrabold text-slate leading-tight">
        Software engineering intern specializing in resilient web interfaces and
        mathematical tools.
      </h1>
      <p className="text-charcoal/80 text-lg max-w-2xl">
        Welcome to my portfolio capstone. Built with React and structured design
        tokens.
      </p>
      <div>
        <Link
          to="/projects/settings-form"
          className="inline-block bg-slate text-white px-5 py-2.5 rounded font-medium hover:bg-cobalt transition-colors"
        >
          View Featured Work
        </Link>
      </div>
    </div>
  );
}
