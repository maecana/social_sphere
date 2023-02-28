// Package/Dependency Imports
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
// Local Imports
import './App.css';
import Login from "./components/Login";
import Home from "./container/Home";

const App = () => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
