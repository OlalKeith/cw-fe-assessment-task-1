import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  initialValue: string;
  onSearch: (search: string) => void;
}

// Updated SearchBar to match the design
export function SearchBar({ initialValue, onSearch }: SearchBarProps) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center bg-gray-800 px-4 py-3 rounded-2xl w-full max-w-lg shadow-lg">
      {/* CHANGED: background to bg-gray-800 and rounded-2xl instead of pill */}
      <Search className="text-gray-400  w-5 h-5 ml-1.5" aria-label="Search icon" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none placeholder:text-gray-400 font-semibold focus:ring-0 focus:border-none !text-base"
        aria-label="Search input"
      />
      <Button className="bg-blue-500 hover:bg-blue-600 text-white ml-3 px-6 py-2 rounded-lg font-semibold">
        {/* CHANGED: rounded-lginstead of rounded-full + font-medium */}
        Search
      </Button>
    </div>
  );
}
