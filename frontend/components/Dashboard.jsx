import { useState } from "react";
import "../App.css";

function Dashboard({ onLogout }) {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const handleNavClick = (name) => {
    setActiveSection(name);
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="dashboard-logo">
          <span>
            MIRZA<span>AUTH</span>
          </span>
        </div>

        <nav className="sidebar-nav">

          <button
            className={`nav-item ${
              activeSection === "Dashboard" ? "active" : ""
            }`}
            onClick={() => handleNavClick("Dashboard")}
          >
            <span>⌂</span>
            Dashboard
          </button>

          <button
            className={`nav-item ${
              activeSection === "Profile" ? "active" : ""
            }`}
            onClick={() => handleNavClick("Profile")}
          >
            <span>◉</span>
            Profile
          </button>

          <button
            className={`nav-item ${
              activeSection === "Security" ? "active" : ""
            }`}
            onClick={() => handleNavClick("Security")}
          >
            <span>◆</span>
            Security
          </button>

          <button
            className={`nav-item ${
              activeSection === "Rewards" ? "active" : ""
            }`}
            onClick={() => handleNavClick("Rewards")}
          >
            <span>$</span>
            Rewards
          </button>

          <button
            className={`nav-item ${
              activeSection === "Settings" ? "active" : ""
            }`}
            onClick={() => handleNavClick("Settings")}
          >
            <span>⚙</span>
            Settings
          </button>

        </nav>

        <div className="sidebar-bottom">

          <div className="vip-mini-card">
            <div>
              <strong>VIP MEMBER</strong>
              <p>Premium Access</p>
            </div>
          </div>

          <button
            className="logout-btn"
            onClick={onLogout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>


      {/* MAIN AREA */}
      <main className="dashboard-main">

        {/* TOPBAR */}
        <header className="topbar">

          <div className="mobile-logo">
           MIRZA<span>AUTH</span>
          </div>

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search anything..."
            />
          </div>

          <div className="top-actions">

            <button
              className="notification"
              onClick={() => alert("No new notifications")}
            >
              ♢
              <span></span>
            </button>

            <div className="user-profile">

              <div className="user-avatar">
                S
              </div>

              <div className="user-info">
                <strong>SHAHZAIB</strong>
                <small>VIP Member</small>
              </div>

              <span className="arrow">⌄</span>

            </div>

          </div>

        </header>


        {/* CONTENT */}

        {activeSection === "Dashboard" && (

          <section className="dashboard-content">

            {/* WELCOME */}
            <div className="welcome-section">

              <div>

                <p className="welcome-small">
                  WELCOME BACK
                </p>

                <h1>
                  Good to see you,
                  <span> Shahzaib.</span>
                </h1>

                <p className="welcome-description">
                  Your MIRZA experience is ready.
                  Everything is looking great today.
                </p>

              </div>

              <button
                className="premium-button"
                onClick={() => handleNavClick("Rewards")}
              >
                Explore VIP
                <span>→</span>
              </button>

            </div>


            {/* VIP HERO CARD */}
            <div className="vip-hero">

              <div className="vip-glow"></div>

              <div className="vip-content">

                <div>
                  MIRZA MEMBERSHIP
                </div>

                <h2>
                  Premium Access
                </h2>

                <p>
                  You have access to all exclusive
                  mirzaAuth features.
                </p>

                <div className="vip-status">
                  <span className="status-dot"></span>
                  Active Membership
                </div>

              </div>

              <div className="vip-badge">
                <strong>VIP</strong>
                <small>MIRZA</small>
              </div>

            </div>


            {/* STATS */}
            <div className="stats-grid">

              <div className="stat-card">

                <div className="stat-icon green">
                  ◈
                </div>

                <div>
                  <p>Security Score</p>
                  <h3>98%</h3>

                  <span className="positive">
                    ↑ Excellent
                  </span>
                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon purple">
                  %
                </div>

                <div>
                  <p>VIP Points</p>
                  <h3>2,450</h3>

                  <span className="positive">
                    +120 this month
                  </span>
                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon blue">
                  ◷
                </div>

                <div>
                  <p>Sessions</p>
                  <h3>24</h3>

                  <span className="neutral">
                    This month
                  </span>
                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon orange">
                  ✓
                </div>

                <div>
                  <p>Account</p>
                  <h3>Verified</h3>

                  <span className="positive">
                    Protected
                  </span>
                </div>

              </div>

            </div>


            {/* LOWER GRID */}
            <div className="lower-grid">

              {/* ACTIVITY */}
              <div className="activity-card">

                <div className="card-heading">

                  <div>
                    <h3>Recent Activity</h3>
                    <p>Your latest account activity</p>
                  </div>

                  <button
                    onClick={() => handleNavClick("Activity")}
                  >
                    View all →
                  </button>

                </div>


                <div className="activity-list">

                  <div className="activity-item">

                    <div className="activity-icon green">
                      ✓
                    </div>

                    <div>
                      <strong>Successful login</strong>
                      <p>Today · 2:42 PM</p>
                    </div>

                    <span className="activity-status">
                      Secure
                    </span>

                  </div>


                  <div className="activity-item">

                    <div className="activity-icon blue">
                      &
                    </div>

                    <div>
                      <strong>Password updated</strong>
                      <p>Yesterday · 8:15 PM</p>
                    </div>

                    <span className="activity-status">
                      Secure
                    </span>

                  </div>


                  <div className="activity-item">

                    <div className="activity-icon purple">
                      ◆
                    </div>

                    <div>
                      <strong>VIP membership activated</strong>
                      <p>Aug 20 · 4:30 PM</p>
                    </div>

                    <span className="activity-status">
                      Active
                    </span>

                  </div>

                </div>

              </div>


              {/* PROFILE CARD */}
              <div className="profile-card">

                <div className="profile-cover"></div>

                <div className="profile-avatar">
                  S
                </div>

                <div className="profile-details">

                  <h3>Shahzaib</h3>

                  <p>
                    shahzaib@example.com
                  </p>

                  <div className="profile-badge">
                    VIP Member
                  </div>

                </div>

                <div className="profile-info">

                  <div>
                    <span>Member since</span>
                    <strong>August 2026</strong>
                  </div>

                  <div>
                    <span>Status</span>

                    <strong className="active-text">
                      ● Active
                    </strong>
                  </div>

                </div>

                <button
                  className="profile-button"
                  onClick={() => handleNavClick("Profile")}
                >
                  View Profile →
                </button>

              </div>

            </div>

          </section>

        )}


        {/* PROFILE */}
        {activeSection === "Profile" && (

          <section className="dashboard-content">

            <div className="welcome-section">

              <div>
                <p className="welcome-small">
                  PROFILE
                </p>

                <h1>
                  Your <span>Profile.</span>
                </h1>

                <p className="welcome-description">
                  Manage your personal account information.
                </p>
              </div>

            </div>

            <div className="profile-card">

              <div className="profile-cover"></div>

              <div className="profile-avatar">
                S
              </div>

              <div className="profile-details">

                <h3>Shahzaib</h3>

                <p>
                  shahzaib@example.com
                </p>

                <div className="profile-badge">
                  VIP Member
                </div>

              </div>

              <div className="profile-info">

                <div>
                  <span>Member since</span>
                  <strong>August 2026</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong className="active-text">
                    ● Active
                  </strong>
                </div>

              </div>

            </div>

          </section>

        )}


        {/* SECURITY */}
        {activeSection === "Security" && (

          <section className="dashboard-content">

            <div className="welcome-section">

              <div>
                <p className="welcome-small">
                  SECURITY
                </p>

                <h1>
                  Account <span>Security.</span>
                </h1>

                <p className="welcome-description">
                  Your account security information.
                </p>
              </div>

            </div>

            <div className="stats-grid">

              <div className="stat-card">

                <div className="stat-icon green">
                  ◈
                </div>

                <div>
                  <p>Security Score</p>
                  <h3>98%</h3>

                  <span className="positive">
                    ↑ Excellent
                  </span>
                </div>

              </div>

              <div className="stat-card">

                <div className="stat-icon orange">
                  ✓
                </div>

                <div>
                  <p>Account</p>
                  <h3>Verified</h3>

                  <span className="positive">
                    Protected
                  </span>
                </div>

              </div>

            </div>

          </section>

        )}


        {/* REWARDS */}
        {activeSection === "Rewards" && (

          <section className="dashboard-content">

            <div className="welcome-section">

              <div>
                <p className="welcome-small">
                  VIP REWARDS
                </p>

                <h1>
                  Your <span>Rewards.</span>
                </h1>

                <p className="welcome-description">
                  Check your VIP points and membership benefits.
                </p>
              </div>

            </div>

            <div className="stats-grid">

              <div className="stat-card">

                <div className="stat-icon purple">
                  %
                </div>

                <div>
                  <p>VIP Points</p>
                  <h3>2,450</h3>

                  <span className="positive">
                    +120 this month
                  </span>
                </div>

              </div>

            </div>

          </section>

        )}


        {/* SETTINGS */}
        {activeSection === "Settings" && (

          <section className="dashboard-content">

            <div className="welcome-section">

              <div>
                <p className="welcome-small">
                  SETTINGS
                </p>

                <h1>
                  Account <span>Settings.</span>
                </h1>

                <p className="welcome-description">
                  Manage your account settings.
                </p>
              </div>

            </div>

            <div className="activity-card">

              <div className="card-heading">

                <div>
                  <h3>Account Settings</h3>
                  <p>Your account preferences</p>
                </div>

              </div>

              <div className="activity-list">

                <div className="activity-item">

                  <div>
                    <strong>Email</strong>
                    <p>shahzaib@example.com</p>
                  </div>

                </div>

                <div className="activity-item">

                  <div>
                    <strong>Membership</strong>
                    <p>VIP Member</p>
                  </div>

                </div>

              </div>

            </div>

          </section>

        )}


        {/* ACTIVITY */}
        {activeSection === "Activity" && (

          <section className="dashboard-content">

            <div className="welcome-section">

              <div>
                <p className="welcome-small">
                  ACTIVITY
                </p>

                <h1>
                  Recent <span>Activity.</span>
                </h1>

                <p className="welcome-description">
                  Your latest account activity.
                </p>
              </div>

            </div>

            <div className="activity-card">

              <div className="card-heading">

                <div>
                  <h3>Recent Activity</h3>
                  <p>Your latest account activity</p>
                </div>

              </div>

              <div className="activity-list">

                <div className="activity-item">

                  <div className="activity-icon green">
                    ✓
                  </div>

                  <div>
                    <strong>Successful login</strong>
                    <p>Today · 2:42 PM</p>
                  </div>

                  <span className="activity-status">
                    Secure
                  </span>

                </div>

                <div className="activity-item">

                  <div className="activity-icon blue">
                    &
                  </div>

                  <div>
                    <strong>Password updated</strong>
                    <p>Yesterday · 8:15 PM</p>
                  </div>

                  <span className="activity-status">
                    Secure
                  </span>

                </div>

                <div className="activity-item">

                  <div className="activity-icon purple">
                    ◆
                  </div>

                  <div>
                    <strong>VIP membership activated</strong>
                    <p>Aug 20 · 4:30 PM</p>
                  </div>

                  <span className="activity-status">
                    Active
                  </span>

                </div>

              </div>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default Dashboard;