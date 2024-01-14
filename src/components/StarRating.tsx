import { cn } from "@/lib/utils";
import React from "react";
import { useEffect, useRef } from "react";

type Props = {
  totalStars: number;
  onChange: (rating: number) => void;
  rating: number;
};

const StarRating = ({ totalStars, rating, onChange }: Props) => {
  const refs = useRef(
    Array(totalStars)
      .fill(null)
      .map(() => React.createRef<HTMLSpanElement>())
  );

  useEffect(() => {
    setTimeout(() => {
      const ref = refs.current?.[totalStars - 1]?.current;
      if (ref) ref.focus();
    }, 0);
  }, [totalStars]);

  return (
    <div className={cn("items-center")}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => onChange(index + 1)}
          tabIndex={0}
          ref={refs?.current[index]}
          onKeyDownCapture={(e) =>
            (e.key === "Enter" || e.code === "Space") && onChange(index + 1)
          }
          className="text-4xl md:text-6xl"
          style={{
            cursor: "pointer",
            color: index < rating ? "gold" : "gray",
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
