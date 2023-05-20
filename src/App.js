import React, { useEffect, useState } from "react";
import TestNavbar from "./components/TestNavbar";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import NewForm from "./components/authorization/NewForm";
import Login from "./components/authorization/Login";
import ErrorPage from "./components/pages/ErrorPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.config";
import { DashboardRoutes } from "./routes/routes";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Calendar from "./components/Calendar";
import CreateEditUser from "./components/dashboard/CreateEditUser";

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
        <Route path="/schedule" element={<Calendar />} />
        <Route path="/sign-up" element={<NewForm />} />
        {user?.email === "adminaccount@gmail.com" && (
          <>
            <Route
              path="/registered-users/add-user"
              element={<CreateEditUser />}
            />
            <Route
              path="/registered-users/edit-user/:id"
              element={<CreateEditUser />}
            />
          </>
        )}

        <Route path="/login" element={<Login />} />

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
