import { useState } from 'react';
import { FeedbackItem } from './types/feedback';
import { FeedbackForm } from './components/feedback/FeedbackForm';
import { FeedbackList } from './components/feedback/FeedbackList';
import RainbowHeart from './components/ui/rainbow-heart';

function App() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);

  const handleSubmit = (suggestion: string) => {
    const newItem: FeedbackItem = {
      id: crypto.randomUUID(),
      suggestion,
      votes: 0,
      createdAt: new Date(),
    };
    setFeedbackItems((prev) => [...prev, newItem]);
  };

  const handleVote = (id: string) => {
    setFeedbackItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl w-full px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <RainbowHeart
              size={64}
              className="hover:scale-110 transition-transform"
            />
            <h1 className="text-4xl font-bold">Creating Inclusive Churches</h1>
            <RainbowHeart
              variant="trans"
              size={64}
              className="hover:scale-110 transition-transform"
            />
          </div>
          <p className="text-lg text-muted-foreground">
            Help us understand how to make churches more welcoming and
            comfortable for the LGBTQ+ community. Share your suggestions and
            vote on others' ideas.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-card rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Share Your Thoughts</h2>
            <FeedbackForm onSubmit={handleSubmit} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Community Suggestions
            </h2>
            {feedbackItems.length === 0 ? (
              <div className="bg-card rounded-lg shadow-sm p-12 text-center">
                <p className="text-lg text-muted-foreground">
                  Be the first to share a suggestion!
                </p>
              </div>
            ) : (
              <FeedbackList items={feedbackItems} onVote={handleVote} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
