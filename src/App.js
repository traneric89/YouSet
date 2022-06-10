import { AppBar, ThemeProvider, Toolbar, Typography } from "@material-ui/core";
import { theme } from "./theme";
import { useState } from "react";
import Packages from "./Components/Packages";
import Form from "./Components/Form";

export const App = () => {
  const [packageSelected, setPackageSelected] = useState();

  const packageClicked = (clickedPackage) => {
    setPackageSelected(clickedPackage);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography>Technical Assignment</Typography>
          </Toolbar>
        </AppBar>

        <Packages onClick={packageClicked} packageSelected={packageSelected} />
        <Form packageSelected={packageSelected} />
      </div>
    </ThemeProvider>
  );
};
