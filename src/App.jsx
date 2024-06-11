import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { PATH } from "./constant/config";
import { Home } from "./page/Home/Home";
import "./index.css"
import { UserDetail } from "./components/UserDetail/UserDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path={PATH.home} element={<Home/>}></Route>
          <Route path={PATH.detail} element={<UserDetail/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
