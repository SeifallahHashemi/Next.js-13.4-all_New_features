import * as React from "react";
import Button from "@mui/material/Button";
import GlobalStyles from "@mui/material/GlobalStyles";

export default function ButtonUsage() {
  return (
    <>
      <GlobalStyles styles={{ button: { backgroundColor: "white" } }} />
      <Button variant="contained">Hello world</Button>
    </>
  );
}
