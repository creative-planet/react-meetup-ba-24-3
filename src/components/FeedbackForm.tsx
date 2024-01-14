import { useRef } from "react";
import StarRating from "./StarRating";
import { useFeedbackStore } from "./data";
import { Input } from "./ui/input";
import FormSection from "./FormSection";

const FeedbackForm = () => {
  const form = useFeedbackStore((state) => state.form);
  const updateForm = useFeedbackStore((state) => state.updateForm);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container max-w-md">
      <div className="">React Meetup Bratislava 3/2024</div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Feedback Form
      </h1>
      <FormSection
        htmlFor="rating"
        label="How would you rate this meetup?"
        focusedByDefault={true}
      >
        <StarRating
          totalStars={5}
          onChange={(rating) => {
            updateForm({ rating });
            nameRef.current?.focus();
          }}
          rating={form.rating || 0}
        />
      </FormSection>
      <FormSection htmlFor="name" label="What's your name?">
        <Input
          ref={nameRef}
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => {
            updateForm({ name: e.target.value });
          }}
        />
      </FormSection>
      <FormSection htmlFor="email" label="What's your email?">
        <Input
          ref={emailRef}
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => {
            updateForm({ email: e.target.value });
          }}
        />
      </FormSection>
    </div>
  );
};

export default FeedbackForm;
