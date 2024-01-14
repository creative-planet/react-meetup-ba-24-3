import { useFeedbackStore } from "./data";

const FeedbackForm = () => {
  const form = useFeedbackStore((state) => state.form);

  console.log("Initial form data", form);

  return (
    <div>
      <div className="">React Meetup Bratislava 3/2024</div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Feedback Form
      </h1>
    </div>
  );
};

export default FeedbackForm;
