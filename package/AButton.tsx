import React from "react";

function AButton(props: { children: string; onClick?: () => void }) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

export default AButton;
