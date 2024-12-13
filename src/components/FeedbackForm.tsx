import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from "lucide-react";

interface FeedbackFormProps {
  onSubmit: (suggestion: string) => void;
}

export function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestion.trim()) {
      onSubmit(suggestion.trim());
      setSuggestion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
        placeholder="Share your suggestion for making churches more welcoming..."
        className="min-h-[120px]"
      />
      <Button type="submit" className="w-full">
        <Heart className="mr-2 h-4 w-4" />
        Share Suggestion
      </Button>
    </form>
  );
}