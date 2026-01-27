// src/pages/Talentine.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx-eT_vWdtYT6QZGUvbai66v944w79p-5QPIvWQ8V4a_yJvGn8tzzHMEgsOIUzWQ-Lp/exec";

const Talentine = () => {
  // Participation type: 'individual' or 'team'
  const [type, setType] = useState("individual");

  // teamSize = 2..4 when team, store numeric; for individual we keep 1
  const [teamSize, setTeamSize] = useState(2);

  // members array stores only additional members (excluding leader).
  // length will be teamSize - 1 when team; keep max length 3 to support up to 4-member teams
  const [members, setMembers] = useState(["", "", ""]);

  // common fields
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");

  const [loading, setLoading] = useState(false);

  // Ensure members array length matches teamSize - 1
  useEffect(() => {
    const needed = Math.max(0, (type === "team" ? teamSize - 1 : 0));
    setMembers((prev) => {
      const copy = prev.slice(0, 3); // keep max 3
      while (copy.length < needed) copy.push("");
      if (copy.length > needed) copy.length = needed;
      // ensure length at least 0
      return copy;
    });
  }, [teamSize, type]);

  const handleMemberChange = (index, value) => {
    setMembers((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const validate = () => {
    // basic validation
    if (!leaderName.trim()) {
      alert("Please enter leader / participant name.");
      return false;
    }
    if (!email.trim()) {
      alert("Please enter an email address.");
      return false;
    }
    if (!college.trim()) {
      alert("Please enter your college / organization.");
      return false;
    }
    if (type === "team") {
      // teamName optional but recommended
      // require member fields
      for (let i = 0; i < teamSize - 1; i++) {
        if (!members[i] || !members[i].trim()) {
          alert(`Please enter Member ${i + 2} name.`);
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!validate()) return;

    setLoading(true);

    // For analytics/storage: members string = comma separated additional members
    const membersValue = type === "team" ? members.slice(0, teamSize - 1).join(", ") : "";

    const payload = new FormData();
    payload.append("type", type);
    payload.append("teamName", type === "team" ? teamName : "");
    payload.append("leaderName", leaderName);
    payload.append("email", email);
    payload.append("college", college);
    // store numeric team size (1 for individual)
    payload.append("teamSize", type === "team" ? teamSize : 1);
    payload.append("members", membersValue);

    try {
      // Using no-cors because we post to Apps Script endpoint that writes to Sheet.
      // This will not give a readable response; you can remove mode:'no-cors' later
      // and handle JSON responses if you configure CORS in your backend.
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      alert("🎉 Registration submitted successfully!");
      // reset UI
      setType("individual");
      setTeamSize(2);
      setMembers(["", "", ""]);
      setTeamName("");
      setLeaderName("");
      setEmail("");
      setCollege("");
    } catch (err) {
      // fetch with no-cors won't throw on server error; this block may not execute.
      console.error(err);
      alert("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* page padding so hero doesn't hide behind fixed header */}
      <main className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#31163b] to-black text-white pt-[5.25rem]">
        {/* Hero */}
        <section className="text-center py-12 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              TALENTINE 2026
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            24-Hour Online Challenge · First-Year Students · Teams & Individuals
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white/10">📅 14 Feb · 9AM</span>
            <span className="px-4 py-2 rounded-full bg-white/10">⏱ 24 Hours</span>
            <span className="px-4 py-2 rounded-full bg-white/10">👥 Teams 2–4 / Individual</span>
            <span className="px-4 py-2 rounded-full bg-white/10">🏆 ₹15,000 Prize Pool</span>
          </div>
        </section>

        {/* quick cards (less text) */}
        <section className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="font-semibold">Tech Treasure Hunt</h3>
            <p className="text-sm text-gray-300 mt-2">Quizzes, clues & logic rounds</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="font-semibold">Prompt Engineering</h3>
            <p className="text-sm text-gray-300 mt-2">Use AI tools, original prompts</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="font-semibold">Final Winners</h3>
            <p className="text-sm text-gray-300 mt-2">Overall winners (combined score)</p>
          </div>
        </section>

        {/* Prizes */}
        <section className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex gap-4 justify-center items-stretch flex-wrap">
            <PrizeCard title="🥇 Winner" amount="₹8,000" />
            <PrizeCard title="🥈 First Runner-Up" amount="₹5,000" />
            <PrizeCard title="🥉 Second Runner-Up" amount="₹2,000" />
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">Certificates for all participants</p>
        </section>

        {/* Rules summary (collapsed look) */}
        <section className="max-w-5xl mx-auto px-6 py-6">
          <div className="grid md:grid-cols-2 gap-6">
            <RuleCard
              title="General Guidelines"
              bullets={[
                "24-hour competition for first-year students",
                "Participation is team-based OR individual",
                "All teams/participants must register before start",
                "Attend opening ceremony & final evaluation",
              ]}
            />
            <RuleCard
              title="Team Rules"
              bullets={[
                "Teams of 2–4 members (leader + others) OR Individual",
                "All members must be 1st year",
                "No changes to team after registration",
                "One participant per team only",
              ]}
            />
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <RuleCard
              title="Tech Treasure Hunt (rules)"
              bullets={[
                "Multi-round: quizzes, clues, logic tasks",
                "Mobile phones allowed only when permitted",
                "No skipping rounds or locations",
                "Misconduct or external help → disqualification",
              ]}
            />
            <RuleCard
              title="Prompt Engineering (rules)"
              bullets={[
                "AI tools allowed (ChatGPT, Gemini)",
                "Prompts must be original — no copy-paste",
                "Explain prompt and output clearly",
                "Misuse/inappropriate content → disqualification",
              ]}
            />
          </div>
        </section>

        {/* Registration form */}
        <section className="max-w-2xl mx-auto px-6 py-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold text-center mb-4">Registration</h2>

            {/* Participation toggle */}
            <div className="flex justify-center gap-3 mb-6">
              <button
                type="button"
                onClick={() => setType("individual")}
                className={`px-4 py-2 rounded-full font-medium ${
                  type === "individual" ? "bg-gradient-to-r from-pink-400 to-purple-400 text-black" : "bg-white/5"
                }`}
              >
                Individual
              </button>
              <button
                type="button"
                onClick={() => setType("team")}
                className={`px-4 py-2 rounded-full font-medium ${
                  type === "team" ? "bg-gradient-to-r from-pink-400 to-purple-400 text-black" : "bg-white/5"
                }`}
              >
                Team
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* team name shown only for team */}
              {type === "team" && (
                <input
                  className="w-full p-3 rounded-xl bg-black border border-white/10 text-white"
                  placeholder="Team Name "
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              )}

              <input
                name="leaderName"
                value={leaderName}
                onChange={(e) => setLeaderName(e.target.value)}
                className="w-full p-3 rounded-xl bg-black border border-white/10 text-white"
                placeholder={type === "individual" ? "Your Name" : "Team Leader Name"}
                required
              />

              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full p-3 rounded-xl bg-black border border-white/10 text-white"
                placeholder="Email"
                required
              />

              <input
                name="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full p-3 rounded-xl bg-black border border-white/10 text-white"
                placeholder="College / Organization"
                required
              />

              {/* team size + member fields only for team */}
              {type === "team" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3">
                      <span className="text-sm w-32">Team size</span>
                      <select
                        value={teamSize}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setTeamSize(val);
                          // adjust members array size
                          setMembers((prev) => {
                            const needed = val - 1;
                            const copy = [...prev];
                            while (copy.length < needed) copy.push("");
                            if (copy.length > needed) copy.length = needed;
                            return copy;
                          });
                        }}
                        className="flex-1 p-3 rounded-xl bg-black border border-white/10"
                      >
                        <option value={2}>2 Members</option>
                        <option value={3}>3 Members</option>
                        <option value={4}>4 Members</option>
                      </select>
                    </label>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-300">Members (excluding leader)</span>
                    </div>
                  </div>

                  {/* member inputs */}
                  {members.map((m, idx) => (
                    <input
                      key={idx}
                      value={m}
                      onChange={(e) => handleMemberChange(idx, e.target.value)}
                      placeholder={`Member ${idx + 2} Name`}
                      required
                      className="w-full p-3 rounded-xl bg-black border border-white/10 text-white"
                    />
                  ))}
                </>
              )}

              <button
                disabled={loading}
                type="submit"
                className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-300 to-pink-400 text-black"
              >
                {loading ? "Submitting..." : type === "team" ? "Register Team" : "Register (Individual)"}
              </button>
            </form>
          </div>
        </section>

        {/* footer note */}
        <section className="py-8 text-center text-gray-400">
          <small>Talentine 2026 — Play fair. Learn more. Create together.</small>
        </section>
      </main>
    </>
  );
};

// small components
const PrizeCard = ({ title, amount }) => (
  <div className="px-6 py-4 rounded-2xl text-black font-semibold" style={{ background: "linear-gradient(135deg,#ffd86b,#ff6ec4)" }}>
    <div className="text-lg">{title}</div>
    <div className="text-xl mt-1">{amount}</div>
  </div>
);

const RuleCard = ({ title, bullets }) => (
  <div className="bg-white/5 rounded-2xl p-5">
    <h4 className="font-semibold mb-2">{title}</h4>
    <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

export default Talentine;
