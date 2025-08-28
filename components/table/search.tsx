//- components/table/search.tsx

import { useState } from "react";
import { Search, X } from "lucide-react";

interface GlobalSearchProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  loading?: boolean;
}

const GlobalSearch = ({
  placeholder = 'Search...',
  value,
  onChange,
  onClear,
  loading
}: GlobalSearchProps) => {
  const iconSize = 18;
  
  return (
    <div className="relative w-72">
      {/* Search Icon */}
      <Search
        className={`${loading ? 'disabled' : ''} absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer`}
        size={iconSize}
      />

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={loading}
        className="input-text w-full pl-8 pr-10 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-100 shadow-xs"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={onClear}
          className={`${loading ? 'disabled' : ''} absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer`}
        >
          <X size={iconSize} />
        </button>
      )}
    </div>
  );
}

export default GlobalSearch;
