

import { useState } from "react";
import Signup from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("signup");

  // Dashboard
  if (page === "dashboard") {
    return <Dashboard  onLogout={() => setPage("login")} />;
  }

  return (
    <div className="auth-page">

      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <div className="auth-card">

        {/* Logo */}
        <div className="logo">
          <div className="logo-mark">◈</div>

          <span>
          MIRZA <span className="logo-green">AUTH</span>
          </span>
        </div>

        {/* Switch */}
        <div className="auth-switch">

          <button
            className={page === "signup" ? "active" : ""}
            onClick={() => setPage("signup")}
          >
            Sign Up
          </button>

          <button
            className={page === "login" ? "active" : ""}
            onClick={() => setPage("login")}
          >
            Log In
          </button>

        </div>

        {page === "signup" ? (
          <Signup
            onLogin={() => setPage("login")}
          />
        ) : (
          <Login
            onSignup={() => setPage("signup")}
            onLoginSuccess={() => setPage("dashboard")}
          />
        )}

      </div>
    </div>
  );
}

export default App;