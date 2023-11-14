import React, { FC } from "react";
import "./styles/styles.css";
import SideNav from "./components/Nav/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstTask from "./components/TaskOne/FirstTask";
import SecondTask from "./components/TaskTwo/SecondTask";

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path={"/lab_7"} element={<FirstTask />} />
          <Route path={"/second"} element={<SecondTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
