import { FeedbackCard } from "./FeedbackCard";
import type { FeedbackItem } from "@/types/feedback";
import { useMemo } from "react";

interface FeedbackListProps {
  items: FeedbackItem[];
  onVote: (id: string) => void;
}

export function FeedbackList({ items, onVote }: FeedbackListProps) {
  const sortedItems = useMemo(() => 
    [...items].sort((a, b) => b.votes - a.votes),
    [items]
  );

  return (
    <div className="space-y-4">
      {sortedItems.map((item) => (
        <FeedbackCard
          key={item.id}
          item={item}
          onVote={onVote}
        />
      ))}
    </div>
  );
}