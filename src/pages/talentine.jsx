import React, { useState } from "react";
import Header from "../components/Header";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwOrsCBouM5oWYXjNJNO1e2sa9N4rYFNR097WQO9kYvt1LxXPMaG2W9_-HoGRWbHwg/exec";

const TalentineDay = () => {
  const [type, setType] = useState("individual");
  const [teamSize, setTeamSize] = useState(2);
  const [members, setMembers] = useState(["", "", ""]);
  const [teamName, setTeamName] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const validate = (form) => {
    if (!form.leaderName.value.trim()) {
      alert("Please enter participant / leader name.");
      return false;
    }

    if (!form.email.value.trim()) {
      alert("Please enter email address.");
      return false;
    }

    if (!form.college.value.trim()) {
      alert("Please enter college / organization.");
      return false;
    }

    if (type === "team") {
      if (!teamName.trim()) {
        alert("Team name is required.");
        return false;
      }

      for (let i = 0; i < teamSize - 1; i++) {
        if (!members[i]?.trim()) {
          alert(`Please enter Member ${i + 2} name.`);
          return false;
        }
      }
    }

    if (!subscribed) {
      alert("Please subscribe to the YouTube channel to proceed.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(e.target)) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("type", type);
    formData.append("leaderName", e.target.leaderName.value);
    formData.append("email", e.target.email.value);
    formData.append("college", e.target.college.value);
    formData.append("teamName", type === "team" ? teamName : "N/A");
    formData.append(
      "teamSize",
      type === "team" ? teamSize : "Individual"
    );
    formData.append(
      "members",
      type === "team" ? members.slice(0, teamSize - 1).join(", ") : ""
    );
    formData.append("subscribed", subscribed ? "Yes" : "No");

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
    setTeamName("");
    setSubscribed(false);
    setLoading(false);
  };

  return (
    <>
      <Header />

      {/* Event Info */}
      <section className="bg-gradient-to-b from-black to-[#120018] text-white px-6 pt-28 pb-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            TALENTINE 2026
          </h1>

          <p className="text-lg text-gray-300">
            Fall in Love with Your Talent ❤️
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="px-4 py-2 rounded-full bg-white/10">
              ⏱ 24-Hour Online Contest
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10">
              📅 Feb 14 · 9 AM Onwards
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10">
              🎓 First-Year Students
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10">
              💰 ₹15,000 Prize Pool
            </span>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Register Now
          </h2>

          {/* Type Toggle */}
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
                <input
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  placeholder="Team Name"
                  className="w-full p-3 rounded-xl bg-black border border-white/10"
                />

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

            {/* YouTube Subscription */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-gray-300 mb-3 text-center">
                🔔 Mandatory: Subscribe to our YouTube channel
              </p>

              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://www.youtube.com/channel/UCFxy5bVaO8KzTIWc3u6QxIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full font-semibold bg-red-600 hover:bg-red-700"
                >
                  Subscribe on YouTube
                </a>

                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={subscribed}
                    onChange={(e) => setSubscribed(e.target.checked)}
                    className="accent-pink-500 w-4 h-4"
                  />
                  I have subscribed to the channel
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !subscribed}
              className={`w-full py-3 rounded-xl font-semibold text-black ${
                loading || !subscribed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-300 to-pink-400"
              }`}
            >
              {loading
                ? "Submitting..."
                : type === "team"
                ? "Register Team"
                : "Register Individual"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default TalentineDay;
