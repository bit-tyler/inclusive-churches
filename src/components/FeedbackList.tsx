import { FeedbackItem } from '@/types/feedback';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowBigUp } from "lucide-react";
import { cn } from '@/lib/utils';

interface FeedbackListProps {
  items: FeedbackItem[];
  onVote: (id: string) => void;
}

export function FeedbackList({ items, onVote }: FeedbackListProps) {
  const sortedItems = [...items].sort((a, b) => b.votes - a.votes);

  return (
    <div className="space-y-4">
      {sortedItems.map((item) => (
        <Card key={item.id} className="p-4">
          <div className="flex items-start gap-4">
            <Button
              variant="outline"
              size="sm"
              className="flex flex-col items-center gap-1 min-w-[60px]"
              onClick={() => onVote(item.id)}
            >
              <ArrowBigUp className={cn(
                "h-5 w-5",
                item.votes > 0 && "text-primary fill-primary"
              )} />
              <span className="text-sm font-medium">{item.votes}</span>
            </Button>
            <div className="flex-1">
              <p className="text-sm/relaxed text-muted-foreground">
                {item.suggestion}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}