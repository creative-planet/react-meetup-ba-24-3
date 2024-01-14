import { Label } from "./ui/label";

type Props = {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
};

const FormSection = ({ htmlFor, label, children }: Props) => {
  return (
    <div className="mt-10">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
};

export default FormSection;
