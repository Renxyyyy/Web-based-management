import React from "react";
import "./NewNavbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

const TestNavbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  //Signing out
  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
    alert("Successfully logged out");
  };

  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-1 text-white pr-5">
            Rizal Village <i class="fas fa-home" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" onClick={() => navigate("/")}>
                Home
              </Nav.Link>
              <Nav.Link
                className="text-white"
                onClick={() => navigate("/about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                className="text-white"
                onClick={() => navigate("/directory")}
              >
                Directory
              </Nav.Link>
              {user === "renxy@email.com" && (
                <Nav.Link
                  className="text-white"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Nav.Link>
              )}
              {user?.email !== "renxy@email.com" ? (
                ""
              ) : (
                <Nav.Link
                  className="text-white"
                  onClick={() => navigate("/user-data")}
                >
                  Users
                </Nav.Link>
              )}
            </Nav>

            {user ? (
              <>
                <Nav.Link className="text-white mx-3">
                  Hi, {user?.displayName}
                </Nav.Link>{" "}
                <Nav.Link
                  href="#link"
                  className="text-white"
                  onClick={handleSignOut}
                >
                  Logout
                </Nav.Link>{" "}
              </>
            ) : (
              <Nav.Link
                href="#link"
                className="text-white"
                onClick={() => navigate("/login")}
              >
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TestNavbar;
