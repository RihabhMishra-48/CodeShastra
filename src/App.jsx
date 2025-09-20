import { Routes, Route } from "react-router-dom";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Quiz from "./pages/Quiz";   // 👈 Quiz page import

// Home Page component
const Home = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />        {/* 👈 Default home */}
        <Route path="/quiz" element={<Quiz />} />    {/* 👈 Quiz route */}
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;
