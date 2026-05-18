import { useState } from "react";

export default function Expandable({ label = "Read More", labelOpen = "Show Less", children, className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div className="pt-4 text-lake-900/80 leading-relaxed space-y-3">
          {children}
        </div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-sm font-semibold text-lake-700 hover:text-lake-900 inline-flex items-center gap-1"
      >
        {open ? labelOpen : label}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
    </div>
  );
}
