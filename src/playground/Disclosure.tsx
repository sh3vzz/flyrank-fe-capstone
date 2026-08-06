import React, { useState } from "react";

interface DisclosureProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  id,
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const panelId = `disclosure-panel-${id}`;
  const buttonId = `disclosure-button-${id}`;

  return (
    <div className="border border-slate/20 rounded-md overflow-hidden my-2">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center p-4 bg-slate/5 text-slate font-medium text-left hover:bg-slate/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt"
      >
        <span>{title}</span>
        <span className="text-sm font-bold">{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="p-4 bg-white text-charcoal border-t border-slate/10"
      >
        {children}
      </div>
    </div>
  );
};
