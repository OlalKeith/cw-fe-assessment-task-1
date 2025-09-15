import { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { useTags } from "../hooks/useTags";

// Added proper TypeScript typing for TagList props
export const TagList = memo(function TagList({ title }: { title: string }) {
  const { tags } = useTags();
  return (
    <div className="mt-12 px-6 max-w-5xl mx-auto">
      <div className="text-white text-lg font-semibold mb-6">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-700 text-gray-400 font-semibold hover:bg-gray-600 cursor-pointer px-4 py-2 rounded-md text-sm"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
});
