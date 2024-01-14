import StarRating from "./StarRating";
import { useFeedbackStore } from "./data";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const FeedbackForm = () => {
  const form = useFeedbackStore((state) => state.form);
  const updateForm = useFeedbackStore((state) => state.updateForm);

  return (
    <div className="container max-w-md">
      <div className="">React Meetup Bratislava 3/2024</div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Feedback Form
      </h1>
      <div className="mt-10">
        <Label htmlFor="rating">How would you rate this meetup?</Label>
        <StarRating
          totalStars={5}
          onChange={(rating) => updateForm({ rating })}
          rating={form.rating || 0}
        />
      </div>
      <div className="mt-10">
        <Label htmlFor="name">What's your name?</Label>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => {
            updateForm({ name: e.target.value });
          }}
        />
      </div>
      <Separator />
      <div className="mt-10">
        <Label htmlFor="email">What's your email?</Label>
        <Input
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => {
            updateForm({ email: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
