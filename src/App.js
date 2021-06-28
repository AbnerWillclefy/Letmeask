import { Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Routes from "./routes/Routes";
import history from "./services/history"
import GlobalStyles from './styles/global'

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
