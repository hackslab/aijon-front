"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleTextProps {
  text?: string | null;
  maxLength?: number;
}

export default function CollapsibleText({
  text,
  maxLength = 100,
}: CollapsibleTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return <span className="text-zinc-400 italic">No prompt set</span>;

  const shouldCollapse = text.length > maxLength;

  return (
    <div className="w-full">
      <div
        className={`whitespace-pre-line text-zinc-900 dark:text-zinc-100 transition-all duration-200 ${
          !isExpanded && shouldCollapse ? "line-clamp-3" : ""
        }`}
      >
        {text}
      </div>
      {shouldCollapse && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded px-1 -ml-1"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="h-3 w-3" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="h-3 w-3" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
