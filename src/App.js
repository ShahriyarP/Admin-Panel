import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";

import Header from "./section/Header";

function App() {
  const [mode, setMode] = useMode();
  const [sideBar, setSideBar] = useState(true)
  return (
    <div >
      <ColorModeContext.Provider value={setMode}>
        <ThemeProvider theme={mode}>
          <CssBaseline />
          <Header />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
