import { Label } from "../ui/label";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  FieldError,
} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// 1. Define the props with a Generic type <T>
interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  control: Control<T>;
  error?: FieldError | any;
  required?: boolean;
}

// 2. Apply the Generic <T> to the component
const SelectField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  options,
  control,
  error,
  required = false,
}: SelectFieldProps<T>) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>

      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render={({ field }) => (
          <>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="select-trigger">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600 text-white">
                {options.map((option) => (
                  <SelectItem
                    value={option.value}
                    key={option.value}
                    className="focus:bg-gray-600 focus:text-white"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Error message moved outside the Select wrapper for safer rendering */}
            {error && (
              <p className="text-sm text-red-500">
                {error.message?.toString()}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectField;
