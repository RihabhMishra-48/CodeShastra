import React, { useState } from "react";
import Header from "../components/Header";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbynom3VwBx-AERdyDQxOKzwfqbvR3KYYRxxlvHO5CL-OgR52SwhA5dZLnmHgfYGMPDfvQ/exec";

const TalentineDay = () => {
  const [type, setType] = useState("individual");
  const [teamSize, setTeamSize] = useState(2);
  const [members, setMembers] = useState(["", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      type,
      leaderName: e.target.leaderName.value,
      email: e.target.email.value,
      college: e.target.college.value,
      teamSize: type === "team" ? teamSize : "Individual",
      members: type === "team" ? members.slice(0, teamSize - 1) : [],
    };

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();

if (text === "SUCCESS") {
  alert("Registration successful!");
  e.target.reset();
  setType("individual");
  setTeamSize(2);
  setMembers(["", "", ""]);
} else {
  alert("Submission failed.");
}

    } catch (err) {
      console.error(err);
      alert("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-b from-[#120018] to-black text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Talentine Day
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Online Hackathon · Tech Treasure Hunt · Prompt Engineering Challenge
          </p>

          <div className="flex justify-center gap-8 mt-6 text-sm font-medium">
            <span>🌐 Online Event</span>
            <span>🏆 ₹15,000 Prize Pool</span>
            <span>💸 No Registration Fee</span>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Register Now
          </h2>

          <div className="flex gap-3 mb-6">
            <button
              type="button"
              onClick={() => setType("individual")}
              className={`flex-1 py-2 rounded-xl border ${
                type === "individual"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "border-purple-400"
              }`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setType("team")}
              className={`flex-1 py-2 rounded-xl border ${
                type === "team"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "border-purple-400"
              }`}
            >
              Team
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="leaderName"
              placeholder="Leader / Participant Name"
              required
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              name="college"
              placeholder="College / Organization"
              required
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            {type === "team" && (
              <>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full p-3 rounded-xl bg-black border border-white/10"
                >
                  <option value={2}>2 Members</option>
                  <option value={3}>3 Members</option>
                  <option value={4}>4 Members</option>
                </select>

                {Array.from({ length: teamSize - 1 }).map((_, i) => (
                  <input
                    key={i}
                    placeholder={`Member ${i + 2} Name`}
                    value={members[i]}
                    onChange={(e) =>
                      handleMemberChange(i, e.target.value)
                    }
                    required
                    className="w-full p-3 rounded-xl bg-black border border-white/10"
                  />
                ))}
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default TalentineDay;
