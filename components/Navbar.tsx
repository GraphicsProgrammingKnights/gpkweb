"use client";

import { useEffect, useState } from "react";

const sections = ["home", "about", "challenges", "team"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  /* views each section and updates when it crosses the middle band of the viewport yuhh */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" },
    );

    // Observe each section element (if present).
    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    /* if navbar component ever gets removed, this stops wasting resources in the background (in case)*/
    return () => observer.disconnect();
  }, []);
 
  /* contains navbar w gpk tiny logo on left and blurs anything near navbar*/
  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 bg-page-background/10 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <a href="#home" className="font-bold text-text-primary">
            GPK
          </a>
        </div>

        {/* active section gets filled white box!!! */}
        <div className="flex gap-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              aria-current={activeSection === section ? "location" : undefined}
              className={`capitalize ${
                activeSection === section
                  ? "rounded-md border border-text-primary bg-white px-3 py-1 text-black"
                  : "rounded-md border border-transparent px-3 py-1 text-text-primary"
              }`}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
