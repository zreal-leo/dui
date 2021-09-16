import React from "react";

type inputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

function AInput(props: {
  placeholder?: string;
  type?: inputType;
  value?: string | number;
  onChange?: (val: string) => void;
}) {
  function changeHandler(e: any) {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }

  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={changeHandler}
    ></input>
  );
}

export default AInput;
