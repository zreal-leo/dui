# DUI

React UI library

## install

```shell
npm i @luodc/dui
```

## example

```ts
import React from "react";
import { AInput, AButton } from "@luodc/dui";

function App() {
  const [value, setValue] = React.useState("");

  return (
    <>
      <AInput value={value} onChange={(val) => setValue(val)}></AInput>
      <AButton onClick={() => {}}>submit</AButton>
    </>
  );
}
```
