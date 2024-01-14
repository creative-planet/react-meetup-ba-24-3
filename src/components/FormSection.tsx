import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { useEffect, useRef, useState } from "react";

type Props = {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  focusedByDefault?: boolean;
};

const FormSection = ({
  htmlFor,
  label,
  children,
  focusedByDefault = false,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState<boolean>(focusedByDefault);

  useEffect(() => {
    const onBlur = () => {
      setFocused(false);
    };
    const onFocus = () => {
      setFocused(true);
    };
    const element = wrapperRef.current;

    if (!element) {
      return;
    }

    element.addEventListener("focusin", onFocus);
    element.addEventListener("focusout", onBlur);
    return () => {
      element.addEventListener("focusin", onFocus);
      element.addEventListener("focusout", onBlur);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn("my-16 transition", focused ? "scale-125" : "")}
    >
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
};

export default FormSection;
