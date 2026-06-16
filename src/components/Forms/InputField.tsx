import React from 'react';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { 
    UseFormRegister, 
    FieldValues, 
    Path, 
    FieldError, 
    RegisterOptions 
} from "react-hook-form";

// 1. Define the props interface with a Generic <T>
interface FormInputProps<T extends FieldValues> {
    name: Path<T>;                  // Ensures 'name' strictly matches a key in your form data
    label: string;
    placeholder?: string;
    type?: string;
    register: UseFormRegister<T>;   // Strictly types the register function
    error?: FieldError | any;       // Accepts the field error object
    validation?: RegisterOptions<T, Path<T>>; // Types the validation rules (required, minLength, etc.)
    disabled?: boolean;
    value?: string | number;
}

// 2. Apply the Generic <T> to the component itself
const InputField = <T extends FieldValues>({ 
    name, 
    label, 
    placeholder, 
    type = "text", 
    register, 
    error, 
    validation, 
    disabled, 
    value 
}: FormInputProps<T>) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">
                {label}
            </Label>
            <Input
                type={type}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                className={cn('form-input', { 'opacity-50 cursor-not-allowed': disabled })}
                {...register(name, validation)}
            />
            {error && <p className="text-sm text-red-500">{error.message?.toString()}</p>}
        </div>
    )
}

export default InputField;