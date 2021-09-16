/// <reference types="react" />
declare type inputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
declare function AInput(props: {
    placeholder?: string;
    type?: inputType;
    value?: string | number;
    onChange?: (val: string) => void;
}): JSX.Element;
export default AInput;
export type { inputType };
