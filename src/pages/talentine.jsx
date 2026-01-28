import React, { useState } from "react";
import Header from "../components/Header";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwOrsCBouM5oWYXjNJNO1e2sa9N4rYFNR097WQO9kYvt1LxXPMaG2W9_-HoGRWbHwg/exec";

const CHANNEL_URL =
  "https://www.youtube.com/channel/UCFxy5bVaO8KzTIWc3u6QxIA";

const TalentineDay = () => {
  const [type, setType] = useState("individual");
  const [teamSize, setTeamSize] = useState(2);
  const [members, setMembers] = useState(["", "", ""]);
  const [teamName, setTeamName] = useState("");

  const [leaderShot, setLeaderShot] = useState(null);
  const [memberShots, setMemberShots] = useState([null, null, null]);

  const [loading, setLoading] = useState(false);

  const handleMemberChange = (i, val) => {
    const copy = [...members];
    copy[i] = val;
    setMembers(copy);
  };

  const handleMemberShot = (i, file) => {
    const copy = [...memberShots];
    copy[i] = file;
    setMemberShots(copy);
  };

  const allScreenshotsUploaded =
    type === "individual"
      ? leaderShot
      : leaderShot &&
        memberShots.slice(0, teamSize - 1).every(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "team" && !teamName.trim()) {
      alert("Team name is required.");
      return;
    }

    if (!allScreenshotsUploaded) {
      alert("Upload subscription screenshots for all participants.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("type", type);
    formData.append("teamName", type === "team" ? teamName : "Individual");
    formData.append("leaderName", e.target.leaderName.value);
    formData.append("email", e.target.email.value);
    formData.append("college", e.target.college.value);
    formData.append("teamSize", type === "team" ? teamSize : 1);
    formData.append(
      "members",
      type === "team" ? members.slice(0, teamSize - 1).join(", ") : ""
    );

    // screenshots
    formData.append("leaderScreenshot", leaderShot);
    memberShots.slice(0, teamSize - 1).forEach((file, i) => {
      formData.append(`member${i + 2}Screenshot`, file);
    });

    await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    alert("🎉 Registration submitted successfully!");

    setTeamName("");
    setMembers(["", "", ""]);
    setLeaderShot(null);
    setMemberShots([null, null, null]);
    setLoading(false);
  };

  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-black to-[#120018] text-white px-6 pt-28 pb-14 text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
          TALENTINE 2026
        </h1>
        <p className="text-gray-300 mt-3">
          24-hour online challenge · Final prizes ₹15,000
        </p>
      </section>

      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Registration
          </h2>

          <div className="flex gap-3 mb-6">
            <button
              type="button"
              onClick={() => setType("individual")}
              className={`flex-1 py-2 rounded-xl ${
                type === "individual"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-white/10"
              }`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setType("team")}
              className={`flex-1 py-2 rounded-xl ${
                type === "team"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-white/10"
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
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              name="college"
              required
              placeholder="College"
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            {type === "team" && (
              <>
                <input
                  required
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
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
              </>
            )}

            {/* Leader Screenshot */}
            <div>
              <label className="text-sm text-gray-300">
                Leader Subscription Screenshot (must show channel logo)
              </label>
              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) => setLeaderShot(e.target.files[0])}
                className="w-full mt-1"
              />
            </div>

            {/* Team Member Screenshots */}
            {type === "team" &&
              members.slice(0, teamSize - 1).map((_, i) => (
                <div key={i} className="space-y-2">
                  <input
                    required
                    placeholder={`Member ${i + 2} Name`}
                    value={members[i]}
                    onChange={(e) =>
                      handleMemberChange(i, e.target.value)
                    }
                    className="w-full p-3 rounded-xl bg-black border border-white/10"
                  />

                  <label className="text-sm text-gray-300">
                    Member {i + 2} Subscription Screenshot (with logo)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) =>
                      handleMemberShot(i, e.target.files[0])
                    }
                  />
                </div>
              ))}

            <div className="flex gap-3">
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 rounded-xl bg-red-600 font-semibold"
              >
                Subscribe
              </a>

              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText(CHANNEL_URL)
                }
                className="flex-1 py-2 rounded-xl bg-white/10"
              >
                Share Link
              </button>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-300 to-pink-400 text-black"
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
