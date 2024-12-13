import { Card } from "@/components/ui/card";
import { UpvoteButton } from "@/components/ui/UpvoteButton";
import type { FeedbackItem } from "@/types/feedback";

interface FeedbackCardProps {
  item: FeedbackItem;
  onVote: (id: string) => void;
}

export function FeedbackCard({ item, onVote }: FeedbackCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <UpvoteButton
          votes={item.votes}
          onClick={() => onVote(item.id)}
        />
        <div className="flex-1">
          <p className="text-lg text-foreground leading-relaxed">
            {item.suggestion}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Card>
  );
}