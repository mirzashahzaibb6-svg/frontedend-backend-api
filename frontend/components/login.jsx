import { useState } from "react";

const Login = ({ onSignup, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      console.log(data);

      // JWT token save
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      alert("Login successful!");

      // Input clear
      setEmail("");
      setPassword("");

      // Dashboard open
      onLoginSuccess();

    } catch (error) {
      console.log(error);
      alert("Server se connection nahi ho raha");
    }
  };

  return (
    <div className="form-content">

      <h1>Welcome Back</h1>

      <p className="subtitle">
        Enter your credentials to continue
        <br />
        to your secure account.
      </p>

      <form onSubmit={handleLogin}>

        <div className="input-box">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-box password-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="forgot-password">
          <span>Secure connection</span>

          <button type="button">
            Forgot password?
          </button>
        </div>

        <button className="main-button" type="submit">
          Login
          <span>→</span>
        </button>

      </form>

      <div className="divider">
        <span></span>
        <p>Or</p>
        <span></span>
      </div>

      <div className="social-buttons">

        <button type="button">
          <span className="google">G</span>
          Google
        </button>

        <button type="button">
          <span>●</span>
          Apple
        </button>

      </div>

      <p className="bottom-text">
        Don't have an account?

        <button
          type="button"
          onClick={onSignup}
        >
          Create Account
        </button>
      </p>

    </div>
  );
};

export default Login;