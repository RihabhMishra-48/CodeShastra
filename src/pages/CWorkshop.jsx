import React, { useState } from "react";
import Header from "../components/Header";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyStRd1Zp1qUtdOo479Bul6dZNe1Fq67DDVIhr_if3uh3pVOG1KaMnY-yrf2rzNW-ob/exec";

const CHANNEL_URL =
  "https://www.youtube.com/channel/UCFxy5bVaO8KzTIWc3u6QxIA";

const PAYMENT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeOnW4PpNIsu7QLr9b41Q5N8NtnrvFxdkfq4kvDY18Ln4IQsA/viewform";

const CWorkshop = () => {
  const [loading, setLoading] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentConfirmed) {
      alert("Please confirm payment before submitting.");
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

    await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    alert("🎉 Registration submitted successfully!");
    e.target.reset();
    setPaymentConfirmed(false);
    setLoading(false);
  };

  return (
    <>
      <Header />

      {/* Automatic spacing below fixed header */}
      <div className="pt-54 sm:pt:50">

        {/* HERO */}
        <section className="bg-gradient-to-b from-black to-[#120018] text-white px-4 sm:px-6 pb-14 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent leading-tight">
            C PROGRAMMING WORKSHOP
          </h1>

          <p className="text-gray-300 mt-3 text-sm sm:text-base">
            3-Day Intensive Training Program
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <span className="px-3 py-2 rounded-full bg-white/10">
              💰 ₹250 Registration
            </span>
            <span className="px-3 py-2 rounded-full bg-white/10">
              📅 4 Mar – 6 Mar
            </span>
            <span className="px-3 py-2 rounded-full bg-white/10">
              ⏰ 9:00 PM – 11:30 PM
            </span>
          </div>
        </section>

        {/* DETAILS */}
        <section className="bg-[#120018] text-white px-4 sm:px-6 py-14">
          <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
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

          <p className="text-center text-xs sm:text-sm text-gray-400 mt-8">
            🚀 Practical, focused & exclusive training.
          </p>
        </section>

        {/* REGISTRATION */}
        <section className="bg-black text-white px-4 sm:px-6 py-20">
          <div className="w-full max-w-md sm:max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
              Registration Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <Input name="name" placeholder="Full Name" />
              <Input name="phone" placeholder="Phone Number" />
              <Input name="email" type="email" placeholder="Email" />
              <Input name="college" placeholder="College" />
              <Input name="course" placeholder="Course" />
              <Input name="section" placeholder="Section" />

              <select
                name="year"
                required
                className="w-full p-3 rounded-xl bg-black border border-white/10 text-sm"
              >
                <option value="">Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>

              {/* Subscribe */}
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-3 rounded-xl bg-red-600 font-semibold text-sm"
              >
                Subscribe Channel
              </a>

              {/* Payment Button - FULL WIDTH */}
              <a
                href={PAYMENT_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-3 rounded-xl font-semibold bg-green-500 hover:bg-green-600 transition"
              >
                Complete Payment
              </a>

              <p className="text-xs text-gray-400 text-center">
                Use the same email in payment form and registration form.
              </p>

              {/* Payment Confirmation Checkbox */}
              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={paymentConfirmed}
                  onChange={() => setPaymentConfirmed(!paymentConfirmed)}
                  className="mt-1"
                />
                <label>
                  I have completed the payment form.
                </label>
              </div>

              {/* Submit */}
              <button
                disabled={!paymentConfirmed || loading}
                type="submit"
                className={`w-full py-3 rounded-xl font-semibold text-black text-sm sm:text-base transition ${
                  paymentConfirmed
                    ? "bg-gradient-to-r from-yellow-300 to-pink-400"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                {loading ? "Submitting..." : "Submit Registration"}
              </button>

            </form>
          </div>
        </section>

      </div>
    </>
  );
};

const DetailCard = ({ title, text }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
    <h3 className="font-semibold text-base sm:text-lg mb-2">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-300">{text}</p>
  </div>
);

const Input = ({ name, type = "text", placeholder }) => (
  <input
    name={name}
    type={type}
    required
    placeholder={placeholder}
    className="w-full p-3 rounded-xl bg-black border border-white/10 text-sm"
  />
);

export default CWorkshop;
