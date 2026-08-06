import React, { useState, useRef } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultTabId }) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || items[0]?.id || ""
  );
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % items.length;
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + items.length) % items.length;
    } else if (e.key === "Home") {
      newIndex = 0;
    } else if (e.key === "End") {
      newIndex = items.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = items[newIndex];
    setActiveTabId(nextTab.id);
    tabRefs.current[nextTab.id]?.focus();
  };

  return (
    <div className="w-full">
      {/* Tab List Header */}
      <div
        role="tablist"
        aria-label="Playground Tabs"
        className="flex border-b border-slate/20 gap-2"
      >
        {items.map((tab, index) => {
          const isSelected = activeTabId === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`px-4 py-2 text-sm font-semibold transition-colors outline-none border-b-2 ${
                isSelected
                  ? "border-cobalt text-cobalt font-bold"
                  : "border-transparent text-slate hover:text-charcoal"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {items.map((tab) => {
        const isSelected = activeTabId === tab.id;
        return (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={!isSelected}
            tabIndex={0}
            className="p-4 bg-white rounded-b-lg border border-t-0 border-slate/20 outline-none focus:ring-1 focus:ring-cobalt"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};