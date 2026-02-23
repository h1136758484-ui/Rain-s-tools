/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResumeTeaser from "./components/ResumeTeaser";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfbfb] font-sans selection:bg-blue-200 selection:text-blue-900">
      <Hero />
      <ResumeTeaser />
      <Projects />
    </div>
  );
}

