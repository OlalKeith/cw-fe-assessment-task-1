import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-3 bg-black border-b-2 border-gray-400 ">
      {/* Left side: logo + title */}
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Worctionary logo" className="w-3.5 h-3.5" />
        <span className="text-white font-bold text-sm md:text-base">Worctionary</span>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Search box - hidden on mobile */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search"
            className="w-40 lg:w-48 pl-10 pr-4 py-2 bg-gray-600 placeholder:text-gray-400 text-sm font-semibold rounded-lg border-none focus:outline-none focus:ring-0"
          />
        </div>

        {/* Search icon for mobile */}
        <button className="md:hidden p-2 text-gray-400 hover:text-white">
          <Search className="w-5 h-5" />
        </button>

        {/* Avatar */}
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
