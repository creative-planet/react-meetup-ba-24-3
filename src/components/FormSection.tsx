import { cn } from "@/lib/utils";
import { Label } from "./ui/label";

type Props = {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
  focused?: boolean;
};

const FormSection = ({ htmlFor, label, children, focused = false }: Props) => {
  return (
    <div className={cn("my-16 transition", focused ? "scale-125" : "")}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
};

export default FormSection;
