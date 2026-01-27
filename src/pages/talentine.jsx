import React from "react";
import Header from "../components/Header";
import banner from "./banner.png";

const Talentine = () => {
  return (
    <>
      <Header />

      {/* Banner */}
      <section className="w-full bg-black">
        <img
          src={banner}
          alt="Talentine 2026 Banner"
          className="w-full max-h-[520px] object-cover"
        />
      </section>

      <section className="min-h-screen bg-gradient-to-b from-[#120018] to-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Title */}
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">💖 TALENTINE 2026</h1>
            <p className="text-gray-300 text-lg">
              Official Guidelines & Rules
            </p>
          </div>

          {/* General Guidelines */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">📌 General Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Talentine is a 24-hour competition exclusively for first-year students.</li>
              <li>The event will be held on <strong>14th February</strong>.</li>
              <li>Participation is team-based.</li>
              <li>Each team must participate in both:
                <ul className="list-disc list-inside ml-6">
                  <li>Tech Treasure Hunt</li>
                  <li>Prompt Engineering Challenge</li>
                </ul>
              </li>
              <li>Registration must be completed before the event begins.</li>
              <li>Teams must attend the opening ceremony and final evaluation.</li>
            </ul>
          </div>

          {/* Team Rules */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">👥 Team Formation Rules</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Teams must consist of <strong>2–3 members</strong>.</li>
              <li>All members must be first-year students.</li>
              <li>Once registered, team members cannot be changed.</li>
              <li>Each participant can join only one team.</li>
            </ul>
          </div>

          {/* Tech Treasure Hunt */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              🧩 Competition 1: Tech Treasure Hunt
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Includes quizzes, clue-solving, and logic-based rounds.</li>
              <li>Mobile phones allowed only for approved tasks.</li>
              <li>Skipping rounds or locations is not allowed.</li>
              <li>Cheating or external help leads to disqualification.</li>
              <li>Teams must maintain discipline and decorum.</li>
              <li>Judges’ decisions are final.</li>
            </ul>
          </div>

          {/* Prompt Engineering */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              🤖 Competition 2: Prompt Engineering Challenge
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>AI tools like ChatGPT or Gemini are allowed.</li>
              <li>Internet usage is permitted.</li>
              <li>Prompts must be original.</li>
              <li>Teams must explain prompts and outputs clearly.</li>
              <li>Inappropriate AI use results in disqualification.</li>
              <li>Evaluation based on creativity, clarity, and output quality.</li>
            </ul>
          </div>

          {/* Scoring */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">🏆 Scoring & Evaluation</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Scores from both competitions will be combined.</li>
              <li>Both competitions carry equal weightage.</li>
              <li>Tech Treasure Hunt score breaks ties.</li>
              <li>Judges’ decisions are final.</li>
            </ul>
          </div>

          {/* UPDATED PRIZES */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">💰 Prize Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>🥇 Winner – ₹8,000</li>
              <li>🥈 First Runner-Up – ₹5,000</li>
              <li>🥉 Second Runner-Up – ₹2,000</li>
              <li>Certificates will be provided to all participants.</li>
            </ul>
          </div>

          {/* Code of Conduct */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">⚠️ Code of Conduct</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Respect teammates, coordinators, and judges.</li>
              <li>Misbehavior or plagiarism leads to disqualification.</li>
              <li>Organizers may modify rules if required.</li>
            </ul>
          </div>

          {/* Final Note */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3">📢 Final Note</h2>
            <p className="text-gray-300">
              Talentine promotes creativity, learning, and teamwork.
              Participate with integrity and innovation.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Talentine;
