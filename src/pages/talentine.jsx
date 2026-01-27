import React, { useState } from "react";
import Header from "../components/Header";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxBddSN4_7iZohC_Nxc5aXFRAlkgYmCyOcdHmhqu_RJI4oI5ABmT07q-wFY_o7c8gPw/exec";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("type", type);
    formData.append("leaderName", e.target.leaderName.value);
    formData.append("email", e.target.email.value);
    formData.append("college", e.target.college.value);
    formData.append("teamSize", type === "team" ? teamSize : 1);
    formData.append(
      "members",
      type === "team"
        ? members.slice(0, teamSize - 1).join(", ")
        : ""
    );

    fetch(SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    alert("🎉 Registration successful!");

    e.target.reset();
    setType("individual");
    setTeamSize(2);
    setMembers(["", "", ""]);
    setLoading(false);
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
              required
              placeholder="Leader / Participant Name"
              disabled={loading}
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              disabled={loading}
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              name="college"
              required
              placeholder="College / Organization"
              disabled={loading}
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            {type === "team" && (
              <>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  disabled={loading}
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
                    disabled={loading}
                    className="w-full p-3 rounded-xl bg-black border border-white/10"
                  />
                ))}
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
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
