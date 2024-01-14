import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { useFeedbackStore } from "./data";
import { Input } from "./ui/input";
import FormSection from "./FormSection";

const FeedbackForm = () => {
  const form = useFeedbackStore((state) => state.form);
  const updateForm = useFeedbackStore((state) => state.updateForm);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState<null | "name" | "email" | "rating">(
    "rating"
  );

  useEffect(() => {
    const onBlur = () => {
      setFocused(null);
    };
    const onFocus = (e: FocusEvent) => {
      if (e.target === nameRef.current) {
        setFocused("name");
      } else if (e.target === emailRef.current) {
        setFocused("email");
      }
    };
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);
    return () => {
      document.addEventListener("focusin", onFocus);
      document.addEventListener("focusout", onBlur);
    };
  }, []);

  return (
    <div className="container max-w-md">
      <div className="">React Meetup Bratislava 3/2024</div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Feedback Form
      </h1>
      <FormSection
        htmlFor="rating"
        label="How would you rate this meetup?"
        focused={focused === "rating"}
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
      <FormSection
        htmlFor="name"
        label="What's your name?"
        focused={focused === "name"}
      >
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
      <FormSection
        htmlFor="email"
        label="What's your email?"
        focused={focused === "email"}
      >
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
