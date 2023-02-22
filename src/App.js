import { Route, Routes } from "react-router-dom";
import "./App.css";
import GeneralPage from "./components/GeneralPage";
import Main from "./components/Main";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/general" element={<GeneralPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
