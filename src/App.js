import React from "react";
import TestNavbar from "./components/TestNavbar";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Schedule from "./components/pages/Schedule";
// import Directory from './components/pages/Directory';
import CreateEditUser from "./components/CreateEditUser";
import NewForm from "./components/authorization/NewForm";
import Login from "./components/authorization/Login";
import Renting from "./components/Renting";
import ErrorPage from "./components/pages/ErrorPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.config";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <TestNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path='/directory' element={<Directory />} /> */}
        <Route path="/sign-up" element={<NewForm />} />
        {user?.email !== "renxy@email.com" ? (
          ""
        ) : (
          <>
            <Route path="/edit/:id" element={<CreateEditUser />} />
            <Route path="/user-data" element={<Renting />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        {user && <Route path="/create" element={<CreateEditUser />} />}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
