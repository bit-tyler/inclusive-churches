import { Button } from "@/components/ui/button";
import { ArrowBigUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpvoteButtonProps {
  votes: number;
  onClick: () => void;
}

export function UpvoteButton({ votes, onClick }: UpvoteButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 py-4 px-3 hover:bg-muted transition-colors",
        "min-w-[60px] group"
      )}
    >
      <ArrowBigUp className={cn(
        "h-5 w-5 transition-colors",
        votes > 0 ? "text-primary fill-primary" : "group-hover:text-primary group-hover:fill-primary"
      )} />
      <span className={cn(
        "text-sm font-medium",
        votes > 0 && "text-primary"
      )}>
        {votes}
      </span>
    </Button>
  );
}