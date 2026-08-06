import React from "react";
import SettingsForm from "../SettingsForm";

export default function SettingsFormCaseStudy() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate">
        Case Study: FE-03 Account Settings Form
      </h1>
      <div className="p-6 bg-white border border-slate/10 rounded-lg shadow-sm">
        <SettingsForm />
      </div>
    </div>
  );
}
