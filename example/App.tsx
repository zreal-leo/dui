import React from "react";

import { AInput, AButton } from "../package/index";

function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <AInput value={value} onChange={(val) => setValue(val)}></AInput>
      <AButton onClick={() => {}}>submit</AButton>
    </>
  );
}

export default App;
