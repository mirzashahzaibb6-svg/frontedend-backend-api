import { useState } from "react";

const Signup = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");

      onLogin();
    } catch (error) {
      console.log(error);
      alert("Server se connection nahi ho raha");
    }
  };

  return (
    <div className="form-content">

      <h1>Create an Account</h1>

      <p className="subtitle">
        To create an account provide your details,
        <br />
        verify email and set a password.
      </p>

      <form onSubmit={handleSignup}>

        <div className="input-box">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="main-button" type="submit">
          Create Account
          <span>→</span>
        </button>

      </form>

      <div className="divider">
        <span></span>
        <p>Or</p>
        <span></span>
      </div>

      <div className="social-buttons">
        <button>
          <span className="google">G</span>
          Google
        </button>

        <button>
          <span>●</span>
          Apple
        </button>
      </div>

      <p className="terms">
        By continuing, you agree to our
        <span> Terms & Privacy Policy</span>
      </p>

      <p className="bottom-text">
        Already have an account?
        <button onClick={onLogin}>Log In</button>
      </p>

    </div>
  );
};

export default Signup;