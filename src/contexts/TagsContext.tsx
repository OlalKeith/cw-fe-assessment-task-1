import { createContext } from "react";
import type { ReactNode } from "react";

interface TagsContextType {
  tags: string[];
}

const TagsContext = createContext<TagsContextType | undefined>(undefined);

export { TagsContext };

interface TagsProviderProps {
  children: ReactNode;
  tags: string[];
}

export function TagsProvider({ children, tags }: TagsProviderProps) {
  return (
    <TagsContext.Provider value={{ tags }}>
      {children}
    </TagsContext.Provider>
  );
}
