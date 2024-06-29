import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { PATH } from "./constant/config";
import { Home } from "./page/Home/Home";
import { UserDetail } from "./components/UserDetail/UserDetail";
import { ListCourses } from "./components/ListCourses/ListCourses";
import { EditUser } from "./components/EditUser/EditUser";

import "./index.css"
import '@fontsource/roboto'; 
import '@fontsource/roboto/500.css'; 
import { Admin } from './pages/Admin'
import { QlUser } from './components/Admin/QlUser'
import { QlKH } from './components/Admin/QlKH'
import { HomeAdmin } from './components/Admin/HomeAdmin'
import { AddUser } from "./components/Admin/AddUser";
import { EditUserAdmin } from "./components/Admin/EditUserAdmin";

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
        <Route path={PATH.admin} element={<Admin />}>
          <Route path={PATH.qluser} element={<QlUser />} />
          <Route path={PATH.homeadmin} element={<HomeAdmin />} />
          <Route path={PATH.plkh} element={<QlKH />} />
          <Route path={PATH.adduseradmin} element={<AddUser />} />
          <Route path={PATH.edituseradmin} element={<EditUserAdmin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
