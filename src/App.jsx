import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { PATH } from "./constant/config";
import { Home } from "./page/Home/Home";
import { UserDetail } from "./components/UserDetail/UserDetail";
import { ListCourses } from "./components/ListCourses/ListCourses";
import { EditUser } from "./components/EditUser/EditUser";
import "./index.css"
import '@fontsource/roboto'; // Defaults to weight 400.
import '@fontsource/roboto/500.css'; // Weight 700.

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path={PATH.home} element={<Home/>}></Route>
          <Route path={PATH.detail} element={<UserDetail/>}></Route>
          <Route path={PATH.listcourses} element={<ListCourses/>}></Route>
          <Route path={PATH.edituser} element={<EditUser/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
