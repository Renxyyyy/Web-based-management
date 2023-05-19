import React, { useEffect, useState } from "react";
import TestNavbar from "./components/TestNavbar";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import CreateEditUser from "./components/CreateEditUser";
import NewForm from "./components/authorization/NewForm";
import Login from "./components/authorization/Login";
import Renting from "./components/Renting";
import ErrorPage from "./components/pages/ErrorPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.config";
import { DashboardRoutes } from "./routes/routes";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [user]);
  return (
    <>
      <TestNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path='/directory' element={<Directory />} /> */}
        <Route />
        <Route path="/sign-up" element={<NewForm />} />
        {user?.email !== "adminaccount@gmail.com" ? (
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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isSignedIn={isSignedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {DashboardRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
