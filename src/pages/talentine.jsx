import React, { useState } from "react";
import Header from "../components/Header";

const TalentineDay = () => {
  const [type, setType] = useState("individual");
  const [teamSize, setTeamSize] = useState(2);

  return (
     <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />

    <section className="hero">
  <h1 className="hero-title">
    Talentine Day <br />
    <span>Online Hackathon</span>
  </h1>

  <p className="hero-subtitle">
    Tech Treasure Hunt <span>×</span> Prompt Engineering Challenge
  </p>

  <div className="stats">
    <div className="stat-card">🌐 <span>Online Event</span></div>
    <div className="stat-card">🏆 <span>₹15,000 Prize Pool</span></div>
    <div className="stat-card">💸 <span>No Registration Fee</span></div>
  </div>
</section>



      <section className="card neon">
  <h2 className="card-title">Register Now</h2>

  <div className="toggle">
    <button
      className={`toggle-btn ${type === "individual" ? "active" : ""}`}
      onClick={() => setType("individual")}
    >
      Individual
    </button>
    <button
      className={`toggle-btn ${type === "team" ? "active" : ""}`}
      onClick={() => setType("team")}
    >
      Team
    </button>
  </div>

  <form className="form">
    <input placeholder="Full Name" required />
    <input type="email" placeholder="Email" required />
    <input placeholder="College / Organization" required />

    <button type="submit" className="primary glow">
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
        /* Card Glow */
.neon {
  box-shadow:
    0 0 40px rgba(168, 85, 247, 0.25),
    inset 0 0 30px rgba(255, 255, 255, 0.04);
}

/* Card title */
.card-title {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}

/* Toggle buttons */
.toggle-btn {
  flex: 1;
  padding: 12px;
  border-radius: 14px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: #e5e7eb;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: rgba(255,255,255,0.05);
}

.toggle-btn.active {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  box-shadow: 0 0 20px rgba(236,72,153,0.6);
  color: white;
}

/* Inputs */
.form input {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255,255,255,0.08);
  font-size: 15px;
}

.form input:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 12px rgba(168,85,247,0.5);
}

/* Primary button glow */
.glow {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(34,211,238,0.7);
}

        .hero h1::after {
  content: "";
  display: block;
  width: 140px;
  height: 4px;
  margin: 16px auto 0;
  background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899);
  border-radius: 10px;
}
.hero {
  text-align: center;
  padding: 90px 20px 60px;
}

.hero-title {
  font-size: 52px;
  line-height: 1.15;
  font-weight: 700;
}

.hero-title span {
  background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  margin-top: 20px;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.85;
}

.hero-desc {
  margin-top: 8px;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.95;
}

.hero-desc span {
  color: #a855f7;
  padding: 0 6px;
}

.stats {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-card {
  padding: 12px 22px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}


      `}</style>
    </div>
  );
};

export default TalentineDay;
