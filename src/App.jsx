import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { DashboardContainer, MiddleContainer } from "./theme/styled";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Map } from "./pages/allPages";
import TopNav from "./components/TopNav";
import WeatherDisplay from "./components/WeatherDisplay";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TopNav />
        <DashboardContainer>
          <SideBar />
          <MiddleContainer>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/map" element={<Map />} />
            </Routes>
          </MiddleContainer>
          <WeatherDisplay />
        </DashboardContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
