import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import GeneralPage from "./components/GeneralPage";
import LoginPage from "./components/LoginPage";
import Main from "./components/Main";
import SettingsPage from "./components/settings/SettingsPage";
import FriendsPage from './components/firends/FriendsPage'

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/general" element={<GeneralPage />}></Route>
        <Route path="/friends" element={<FriendsPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
