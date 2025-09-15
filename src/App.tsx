import { useState } from "react";
import { Header } from "./components/Header";
import { TagList } from "./components/TagList";
import { HeroSection } from "./components/HeroSection";
import { TagsProvider } from "./contexts/TagsContext";

export default function App() {
  const [tags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-black min-h-screen text-white">
      <TagsProvider tags={tags}>
        <Header />
        <HeroSection />  {/* Updated to use renamed HeroSection */}
        <TagList title="Trending" />
        <TagList title="For you" />
      </TagsProvider>
    </main>
  );
}
