import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SettingsFormCaseStudy from "./pages/SettingsFormCaseStudy";
import Health from "./pages/Health";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-canvas text-charcoal flex flex-col font-sans">
        {/* Navigation Bar */}
        <header className="border-b border-slate/10 bg-white">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              to="/"
              className="font-bold text-slate text-lg hover:text-cobalt transition-colors"
            >
              M. SHAHEER ALI
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link to="/" className="hover:text-cobalt">
                Home
              </Link>
              <Link to="/projects" className="hover:text-cobalt">
                Projects
              </Link>
              <Link to="/health" className="hover:text-cobalt">
                Health
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow max-w-5xl w-full mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/settings-form"
              element={<SettingsFormCaseStudy />}
            />
            <Route path="/health" element={<Health />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate/10 bg-white py-6 text-center text-xs text-charcoal/60">
          © {new Date().getFullYear()} M. Shaheer Ali. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
