import {
  createContext,
  useContext,
} from "react";

export type FormFieldContextValue = {
  id?: string;
  error?: string;
  helperText?: string;
  required: boolean;
  messageId?: string;
};

export const FormFieldContext =
  createContext<FormFieldContextValue | null>(null);

export function useFormField() {
  return useContext(FormFieldContext);
}
