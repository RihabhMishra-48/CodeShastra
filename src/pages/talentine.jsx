import React, { useState } from "react";

const TalentineDay = () => {
  const [type, setType] = useState("individual");
  const [teamSize, setTeamSize] = useState(2);

  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">📘 CodeShastra</div>
        <div className="nav-actions">
          <button className="outline">Register</button>
          <button className="outline">Sign In</button>
        </div>
      </nav>

      <section className="hero">
        <h1>
          Discover New Horizons in <br /> Tech with <span>CodeShastra</span>
        </h1>
        <p>
          Talentine Day – Online Hackathon <br />
          Tech Treasure Hunt + Prompt Engineering Challenge
        </p>

        <div className="stats">
          <div>🌐 Online Event</div>
          <div>🏆 ₹15,000 Prize Pool</div>
          <div>💸 No Registration Fee</div>
        </div>
      </section>

      <section className="card">
        <h2>Register Now</h2>

        <div className="toggle">
          <button
            className={type === "individual" ? "active" : ""}
            onClick={() => setType("individual")}
          >
            Individual
          </button>
          <button
            className={type === "team" ? "active" : ""}
            onClick={() => setType("team")}
          >
            Team
          </button>
        </div>

        <form className="form">
          <input placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input placeholder="College / Organization" required />

          {type === "team" && (
            <>
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
              >
                <option value={2}>2 Members</option>
                <option value={3}>3 Members</option>
                <option value={4}>4 Members</option>
              </select>

              {[...Array(teamSize)].map((_, i) => (
                <input
                  key={i}
                  placeholder={`Member ${i + 1} Name`}
                  required
                />
              ))}
            </>
          )}

          <button type="submit" className="primary">
            Submit Registration 🚀
          </button>
        </form>
      </section>

      <style>{`
        body {
          margin: 0;
          background: radial-gradient(circle at top, #2b0f3f, #05010a);
          color: white;
          font-family: Inter, sans-serif;
        }

        .page {
          min-height: 100vh;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 20px 40px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .logo {
          font-weight: bold;
          font-size: 20px;
        }

        .nav-actions button {
          margin-left: 10px;
        }

        .outline {
          background: transparent;
          border: 1px solid #a855f7;
          color: white;
          padding: 8px 16px;
          border-radius: 10px;
          cursor: pointer;
        }

        .hero {
          text-align: center;
          padding: 80px 20px;
        }

        .hero h1 {
          font-size: 48px;
          line-height: 1.2;
        }

        .hero span {
          background: linear-gradient(90deg, #f472b6, #a855f7, #22d3ee);
          -webkit-background-clip: text;
          color: transparent;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 30px;
          font-weight: 500;
        }

        .card {
          max-width: 520px;
          margin: auto;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(12px);
        }

        .toggle {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .toggle button {
          flex: 1;
          padding: 10px;
          border-radius: 12px;
          border: 1px solid #7c3aed;
          background: transparent;
          color: white;
          cursor: pointer;
        }

        .toggle .active {
          background: linear-gradient(90deg, #7c3aed, #ec4899);
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form input,
        .form select {
          padding: 12px;
          border-radius: 10px;
          border: none;
          background: #0f172a;
          color: white;
        }

        .primary {
          margin-top: 10px;
          padding: 14px;
          border-radius: 14px;
          border: none;
          font-weight: bold;
          background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899);
          color: black;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default TalentineDay;
