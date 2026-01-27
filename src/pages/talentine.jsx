import React, { useState } from "react";
import Header from "../components/Header";
import banner from "./banner.png";

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
    setLoading(true);

    const formData = new FormData();
    formData.append("type", type);
    formData.append("leaderName", e.target.leaderName.value);
    formData.append("email", e.target.email.value);
    formData.append("college", e.target.college.value);
    formData.append(
      "teamSize",
      type === "team" ? teamSize : "Individual"
    );
    formData.append(
      "members",
      type === "team" ? members.slice(0, teamSize - 1).join(", ") : ""
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

      {/* Banner Section */}
      <section className="bg-black">
        <img
          src={banner}
          alt="Talentine 2026 Banner"
          className="w-full max-h-[700px] object-cover"
        />
      </section>

      {/* Event Info */}
      <section className="bg-gradient-to-b from-black to-[#120018] text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Talentine 2026
          </h1>

          <p className="text-lg text-gray-300">
            Fall in Love with Your Talent ❤️
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="px-4 py-2 rounded-full bg-white/10">
              ⏱ 24-Hour Online Contest
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10">
              📅 February 14 · 9 AM Onwards
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10">
              🎓 Open for First-Year Students
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10">
              🏆 ₹15,000 Prize Pool
            </span>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-[#120018] text-white px-6 py-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-2">
              🔍 Tech Treasure Hunt
            </h3>
            <p className="text-gray-300 mb-4">
              Solve fun technical challenges and uncover hidden clues.
            </p>
            <ul className="text-sm space-y-1">
              <li>🏅 Winner: ₹8,000</li>
              <li>🥈 1st Runner-Up: ₹5,000</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-2">
              🤖 Prompt Engineering Challenge
            </h3>
            <p className="text-gray-300 mb-4">
              Craft intelligent prompts and push AI to its limits.
            </p>
            <ul className="text-sm space-y-1">
              <li>🥈 1st Runner-Up: ₹5,000</li>
              <li>📜 Certificates for all participants</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="bg-black text-white px-6 py-20">
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
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              name="college"
              required
              placeholder="College / Organization"
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
