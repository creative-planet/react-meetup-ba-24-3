import { cn } from "@/lib/utils";

type Props = {
  totalStars: number;
  onChange: (rating: number) => void;
  rating: number;
};

const StarRating = ({ totalStars, rating, onChange }: Props) => {
  return (
    <div className={cn("items-center")}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => onChange(index + 1)}
          tabIndex={0}
          onKeyDownCapture={(e) => e.key === "Enter" && onChange(index + 1)}
          className="text-4xl md:text-6xl"
          style={{
            cursor: "pointer",
            color: index < rating ? "gold" : "gray",
          }}
        >
          &#9733;
        </span>
      ))}
      <p className={cn("text-4xl", !rating ? "opacity-0" : "")}>
        {rating} / {totalStars}
      </p>
    </div>
  );
};

export default StarRating;
