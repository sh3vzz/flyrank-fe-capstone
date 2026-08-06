import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate">Projects & Case Studies</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white border border-slate/10 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-slate mb-2">
            FE-03 React Settings Form
          </h2>
          <p className="text-sm text-charcoal/70 mb-4">
            Production-grade account settings form built using React Hook Form
            and Zod validation.
          </p>
          <Link
            to="/projects/settings-form"
            className="text-cobalt font-semibold text-sm hover:underline"
          >
            Read Case Study →
          </Link>
        </div>
      </div>
    </div>
  );
}
