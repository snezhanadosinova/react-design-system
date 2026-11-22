import { createContext, useContext } from "react";

export type RadioGroupContextValue = {
    name: string;
    value?: string;
    disabled: boolean;
    required: boolean;
    error?: string;
    messageId?: string;
    onChange: (value: string) => void;
};

export const RadioGroupContext =
    createContext<RadioGroupContextValue | null>(null);

export function useRadioGroup() {
    return useContext(RadioGroupContext);
}
