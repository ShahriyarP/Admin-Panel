import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Header from "./section/Header";
import Sidebar from "./section/Sidebar";
import Dashboard from "./section/pages/Dashboard";
import Contacts from "./section/pages/Contacts";
import Faq from "./section/pages/Faq";
import Form from "./section/pages/Form";
import Team from "./section/pages/Team";
import Setting from "./section/pages/Setting";
import BarChart from "./section/charts/BarChart";
import PieChart from "./section/charts/PieChart";


function App() {
  const [mode, setMode] = useMode();
  const [sideBar, setSideBar] = useState(true)
  return (
    < >
      <ColorModeContext.Provider value={setMode}>
        <ThemeProvider theme={mode}>
          <CssBaseline />
          <div className="app">
            <Sidebar sideBar={sideBar} />
            <main className="content">
              <Header setSideBar={setSideBar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/team" element={<Team />} />
                <Route path="/form" element={<Form />} />
                <Route path="/barchart" element={<BarChart />} />
                <Route path="/piechart" element={<PieChart />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
