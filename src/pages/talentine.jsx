import React, { useState } from "react";
import Header from "../components/Header";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwhmiHH86wsGVHcq2y2O3FbA557nohX6WtEIbQB1i7SnVzOJTfba7fFD3W06NQ-i8g6/exec";

const Talentine = () => {
  const [type, setType] = useState("team");
  const [teamSize, setTeamSize] = useState(2);
  const [members, setMembers] = useState(["", ""]);
  const [loading, setLoading] = useState(false);

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("type", type);
    formData.append("leaderName", e.target.leaderName.value);
    formData.append("email", e.target.email.value);
    formData.append("college", e.target.college.value);
    formData.append("teamSize", teamSize);
    formData.append("members", members.join(", "));

    fetch(SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    alert("🎉 Registration successful!");
    e.target.reset();
    setMembers(["", ""]);
    setTeamSize(2);
    setLoading(false);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="pt-36 pb-20 px-6 bg-gradient-to-br from-[#1d2671] to-[#c33764] text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
          TALENTINE 2026
        </h1>
        <p className="mt-4 text-lg text-white/90">
          A 24-Hour Tech Challenge for First-Year Students
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 rounded-full bg-white/15">📅 14 February</span>
          <span className="px-4 py-2 rounded-full bg-white/15">👥 Teams of 2–3</span>
          <span className="px-4 py-2 rounded-full bg-white/15">⏱ 24 Hours</span>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="bg-[#120018] text-white px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-2">🧩 Tech Treasure Hunt</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Quiz, clues & logic rounds</li>
              <li>• No skipping allowed</li>
              <li>• Discipline mandatory</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-2">🤖 Prompt Engineering</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Use ChatGPT / Gemini</li>
              <li>• Original prompts only</li>
              <li>• Explain prompt & output</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section className="bg-black text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">🏆 Final Prizes</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Prize title="🥇 Winner" amount="₹8,000" />
          <Prize title="🥈 First Runner-Up" amount="₹5,000" />
          <Prize title="🥉 Second Runner-Up" amount="₹2,000" />
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Certificates for all participants
        </p>
      </section>

      {/* REGISTRATION FORM */}
      <section className="bg-gradient-to-b from-black to-[#120018] px-6 py-20">
        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Team Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="leaderName"
              required
              placeholder="Team Leader Name"
              className="input"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="input"
            />
            <input
              name="college"
              required
              placeholder="College Name"
              className="input"
            />

            <select
              value={teamSize}
              onChange={(e) => {
                setTeamSize(Number(e.target.value));
                setMembers(Array(Number(e.target.value) - 1).fill(""));
              }}
              className="input"
            >
              <option value={2}>2 Members</option>
              <option value={3}>3 Members</option>
            </select>

            {Array.from({ length: teamSize - 1 }).map((_, i) => (
              <input
                key={i}
                required
                placeholder={`Member ${i + 2} Name`}
                value={members[i]}
                onChange={(e) => handleMemberChange(i, e.target.value)}
                className="input"
              />
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-300 to-pink-400 text-black"
            >
              {loading ? "Submitting..." : "Register Team"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

const Prize = ({ title, amount }) => (
  <div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-pink-400 to-yellow-300 text-black font-bold">
    <h3 className="text-xl">{title}</h3>
    <p className="text-lg">{amount}</p>
  </div>
);

export default Talentine;
