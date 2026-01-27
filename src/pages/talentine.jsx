import React from "react";
import Header from "../components/Header";

const Talentine = () => {
  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-b from-[#120018] to-black text-white px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Hero Title */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                TALENTINE 2026
              </span>
            </h1>
            <p className="text-lg text-gray-300">
              24-Hour Online Hackathon · Tech Treasure Hunt × Prompt Engineering
            </p>
          </div>

          {/* General Guidelines */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">📌 General Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Talentine is a 24-hour competition exclusively for first-year students.</li>
              <li>The event will be held on <strong>14th February</strong>.</li>
              <li>Participation is strictly team-based.</li>
              <li>Each team must participate in both competitions:
                <ul className="list-disc list-inside ml-6">
                  <li>Tech Treasure Hunt</li>
                  <li>Prompt Engineering Challenge</li>
                </ul>
              </li>
              <li>Registration must be completed before the event begins.</li>
              <li>Attendance during opening ceremony and final evaluation is mandatory.</li>
            </ul>
          </section>

          {/* Team Rules */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">👥 Team Formation Rules</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Each team must consist of <strong>2–3 members</strong>.</li>
              <li>All team members must be from the same academic year (1st year).</li>
              <li>Team members cannot be changed after registration.</li>
              <li>Each participant can be part of only one team.</li>
            </ul>
          </section>

          {/* Tech Treasure Hunt */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              🧩 Competition 1: Tech Treasure Hunt
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Includes quizzes, clue-solving, and logic-based challenges.</li>
              <li>Mobile phones are allowed only for permitted tasks.</li>
              <li>Skipping rounds or locations is strictly prohibited.</li>
              <li>Any form of cheating or external help leads to disqualification.</li>
              <li>Judges’ and coordinators’ decisions are final.</li>
            </ul>
          </section>

          {/* Prompt Engineering */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              🤖 Competition 2: Prompt Engineering Challenge
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>AI tools such as ChatGPT or Gemini may be used.</li>
              <li>Internet usage is allowed.</li>
              <li>Prompts must be original; plagiarism is prohibited.</li>
              <li>Teams must clearly explain both prompt and output.</li>
              <li>Evaluation is based on prompt quality, creativity, output, and explanation.</li>
            </ul>
          </section>

          {/* Scoring */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">🏆 Scoring & Evaluation</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Final rankings are based on combined scores from both competitions.</li>
              <li>Both competitions carry equal weightage.</li>
              <li>In case of a tie, Tech Treasure Hunt score will be used as a tie-breaker.</li>
              <li>Judges’ decisions are final and binding.</li>
            </ul>
          </section>

          {/* Final Prizes */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              💰 Final Winner Prize Details
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>🥇 Overall Winner – ₹8,000</li>
              <li>🥈 Overall First Runner-Up – ₹5,000</li>
              <li>🥉 Overall Second Runner-Up – ₹2,000</li>
              <li>Prizes are awarded based on final combined scores only.</li>
              <li>Certificates will be provided to all participants.</li>
            </ul>
          </section>

          {/* Code of Conduct */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">⚠️ Code of Conduct</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Participants must maintain respectful behaviour at all times.</li>
              <li>Any form of misbehavior, plagiarism, or unfair practice leads to disqualification.</li>
              <li>Organizers reserve the right to modify rules if required.</li>
            </ul>
          </section>

          {/* Final Note */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">📢 Final Note</h2>
            <p className="text-gray-300">
              Talentine is designed to encourage learning, creativity, and collaboration.
              Participants are expected to compete in the true spirit of innovation and teamwork.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Talentine;
