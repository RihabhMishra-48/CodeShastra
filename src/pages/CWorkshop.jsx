import React, { useState } from "react";
import Header from "../components/Header";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyStRd1Zp1qUtdOo479Bul6dZNe1Fq67DDVIhr_if3uh3pVOG1KaMnY-yrf2rzNW-ob/exec"; // Replace with your script URL

const CHANNEL_URL =
  "https://www.youtube.com/channel/UCFxy5bVaO8KzTIWc3u6QxIA";

const CWorkshop = () => {
  const [loading, setLoading] = useState(false);
  const [screenshot, setScreenshot] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!screenshot) {
      alert("Upload subscription screenshot.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("phone", e.target.phone.value);
    formData.append("email", e.target.email.value);
    formData.append("college", e.target.college.value);
    formData.append("course", e.target.course.value);
    formData.append("section", e.target.section.value);
    formData.append("year", e.target.year.value);
    formData.append("subscriptionScreenshot", screenshot);

    await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    alert("🎉 Registration submitted successfully!");
    e.target.reset();
    setScreenshot(null);
    setLoading(false);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-b from-black to-[#120018] text-white px-6 pt-32 pb-14 text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
          C PROGRAMMING WORKSHOP
        </h1>
        <p className="text-gray-300 mt-3">
          3-Day Intensive Training Program
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full bg-white/10">
            💰 ₹250 Registration
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10">
            📅 3 Days (Dates: 4 Mar - 6 Mar )
          </span>
          <span className="px-4 py-2 rounded-full bg-white/10">
            ⏰ 9:00 PM – 10:30 PM
          </span>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Payment details will be sent to your registered email soon.
        </p>
      </section>

      {/* WORKSHOP DETAILS */}
      <section className="bg-[#120018] text-white px-6 py-14">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <DetailCard
            title="📚 Structured Learning"
            text="Beginner-friendly yet powerful C programming concepts."
          />
          <DetailCard
            title="📝 Quiz & Practice"
            text="Live quiz + exclusive practice problems."
          />
          <DetailCard
            title="🤝 Mentorship Support"
            text="Dedicated doubt-solving sessions."
          />
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          🚀 Not just basic YouTube content — practical, focused & exclusive.
        </p>
      </section>

      {/* REGISTRATION */}
      <section className="bg-black text-white px-6 py-20">
        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
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

            <input
              name="course"
              required
              placeholder="Course"
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <input
              name="section"
              required
              placeholder="Section"
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            />

            <select
              name="year"
              required
              className="w-full p-3 rounded-xl bg-black border border-white/10"
            >
              <option value="">Select Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>

            {/* Subscribe Section */}
            <div className="flex gap-3">
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2 rounded-xl bg-red-600 font-semibold"
              >
                Subscribe Channel
              </a>
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

const DetailCard = ({ title, text }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{text}</p>
  </div>
);

export default CWorkshop;
