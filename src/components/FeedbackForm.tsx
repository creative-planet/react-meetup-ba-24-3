import { useRef } from "react";
import StarRating from "./StarRating";
import { useFeedbackStore, validateForm } from "./data";
import { Input } from "./ui/input";
import FormSection from "./FormSection";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const FeedbackForm = () => {
  const form = useFeedbackStore((state) => state.form);
  const updateForm = useFeedbackStore((state) => state.updateForm);
  const submitForm = useFeedbackStore((state) => state.submitForm);
  const status = useFeedbackStore((state) => state.status);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const validation = validateForm(form);

  if (status === "success") {
    return (
      <div className="container max-w-md">
        <div className="text-2xl font-extrabold text-green-500">
          Thank you for your feedback!
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-md">
      <div className="">React Meetup Bratislava 3/2024</div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Feedback Form
      </h1>
      <FormSection htmlFor="rating" label="How would you rate this meetup?">
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
          disabled={status === "pending"}
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
          disabled={status === "pending"}
          ref={emailRef}
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => {
            updateForm({ email: e.target.value });
          }}
        />
      </FormSection>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-100">
        <div className="container max-w-md">
          {status === "pending" ? (
            <Button disabled size={"lg"} className="w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              size={"lg"}
              className="w-full"
              disabled={validation !== true}
              onClick={() => submitForm()}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
