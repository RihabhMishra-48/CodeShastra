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

  const shareChannel = async () => {
    const text = `Subscribe to this channel to participate in TALENTINE 2026:\n${CHANNEL_URL}`;
    if (navigator.share) {
      await navigator.share({
        title: "TALENTINE 2026",
        text,
        url: CHANNEL_URL,
      });
    } else {
      await navigator.clipboard.writeText(CHANNEL_URL);
      alert("Channel link copied. Share it with your teammates.");
    }
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

      {/* HERO */}
      <section className="bg-gradient-to-b from-black to-[#120018] text-white px-6 pt-32 pb-14 text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          TALENTINE 2026
        </h1>
        <p className="text-gray-300 mt-3">
          24-Hour Online Hackathon · 14 February
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full bg-white/10">👥 Teams 2–4 / Individual</span>
          <span className="px-4 py-2 rounded-full bg-white/10">🎓 First-Year Only</span>
          <span className="px-4 py-2 rounded-full bg-white/10">🏆 ₹15,000 Prize Pool</span>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="bg-[#120018] text-white px-6 py-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <DetailCard
            title="🔍 Tech Treasure Hunt"
            text="Quizzes, clues & logic rounds. Discipline mandatory."
          />
          <DetailCard
            title="🤖 Prompt Engineering"
            text="Use ChatGPT/Gemini. Original prompts only."
          />
          <DetailCard
            title="🏆 Final Winners"
            text="Combined score from both rounds decides winners."
          />
        </div>

        <div className="max-w-3xl mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <PrizeCard title="🥇 Winner" amount="₹8,000" />
          <PrizeCard title="🥈 First Runner-Up" amount="₹5,000" />
          <PrizeCard title="🥉 Second Runner-Up" amount="₹2,000" />
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Certificates for all participants · Prizes for final winners only
        </p>
      </section>

      {/* REGISTRATION */}
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
            {type === "team" && (
              <input
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Team Name"
                className="w-full p-3 rounded-xl bg-black border border-white/10"
              />
            )}

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
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-black border border-white/10"
              >
                <option value={2}>2 Members</option>
                <option value={3}>3 Members</option>
                <option value={4}>4 Members</option>
              </select>
            )}

            {/* SUBSCRIBE + SHARE */}
            <div className="flex gap-3">
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 rounded-xl bg-red-600 font-semibold"
              >
                Subscribe Channel
              </a>
              <button
                type="button"
                onClick={shareChannel}
                className="flex-1 py-2 rounded-xl bg-white/10"
              >
                Share Link
              </button>
            </div>

            {/* Screenshots */}
            <label className="text-sm text-gray-300">
              Subscription Screenshot (with your id logo ,  disqualified if not subscribed)
            </label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setLeaderShot(e.target.files[0])}
            />

            {type === "team" &&
              members.slice(0, teamSize - 1).map((_, i) => (
                <div key={i} className="space-y-2">
                  <input
                    required
                    placeholder={`Member ${i + 2} Name`}
                    value={members[i]}
                    onChange={(e) => handleMemberChange(i, e.target.value)}
                    className="w-full p-3 rounded-xl bg-black border border-white/10"
                  />
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

const DetailCard = ({ title, text }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{text}</p>
  </div>
);

const PrizeCard = ({ title, amount }) => (
  <div className="px-6 py-4 rounded-2xl text-black font-semibold"
       style={{ background: "linear-gradient(135deg,#ffd86b,#ff6ec4)" }}>
    <div className="text-lg">{title}</div>
    <div className="text-xl mt-1">{amount}</div>
  </div>
);

export default TalentineDay;
