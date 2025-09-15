import { useCallback } from "react";
import { SearchBar } from "./SearchBar";

// Renamed BoxArea97 to HeroSection for clarity
export function HeroSection() {
  // Memoized onSearch function to prevent unnecessary re-renders
  const onSearch = useCallback((search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  }, []);

  return (
   <div className="relative w-full flex justify-center mt-6 px-4">
      {/* CHANGED: flex + justify-center + px-4 to center the hero */}
      <div className="relative w-full max-w-6xl h-[28rem] rounded-2xl overflow-hidden">
        {/* CHANGED: Added max-w-6xl and rounded-2xl here */}
        <img
          src="/task1/hero-bg.png"
          className="w-full h-full object-cover"
          alt="Hero background"
        />
        <div className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 max-w-3xl">
            Search for words, phrases and meanings
          </h1>
          <SearchBar initialValue="" onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}
