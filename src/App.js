import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./contexts/AuthContext";

import Routes from "./routes/Routes";
import history from "./services/history"

import GlobalStyles from './styles/global'
import { lightTheme, darkTheme } from './styles/theme'

import ToggleTheme from './components/ToggleTheme'
import { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        <AuthProvider>
        <Router history={history}>
          <GlobalStyles />
          <Routes />
          <ToggleTheme onClick={toggleTheme} icon={currentTheme}/>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
