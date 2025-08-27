//- components/table/search.tsx

import { useState } from "react";
import { Search, X } from "lucide-react";

interface GlobalSearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const GlobalSearch = ({ value, onChange, onClear }: GlobalSearchProps) => {
  return (
    <div className="relative w-72">
      {/* Search Icon */}
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer" size={18} />

      {/* Input */}
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        className="w-full pl-8 pr-10 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-xs"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={onClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default GlobalSearch;
