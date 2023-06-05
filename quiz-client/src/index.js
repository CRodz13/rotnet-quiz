import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Button from "@mui/material/Button";
import { ToggleOff, ToggleOn} from "@mui/icons-material";
import { ContextProvider } from "./hooks/useStateContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily:'"IBM Plex Sans"'
  }
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

function AppWrapper() {
  const [themeMode, setThemeMode] = useState("dark");

  const handleThemeToggle = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <React.StrictMode>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Button onClick={handleThemeToggle}>
            {themeMode === "dark" ? <ToggleOn /> : <ToggleOff />}
          </Button>
          <App />
        </ThemeProvider>
      </ContextProvider>
    </React.StrictMode>
  );
}

root.render(<AppWrapper />);

reportWebVitals();
