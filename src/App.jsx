import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import { trackPageView } from "./utils/analytics.js";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Tutorials from "./pages/Tutorials.jsx";
import Community from "./pages/Community.jsx";
import Contact from "./pages/Contact.jsx";
import Stories from "./pages/Stories.jsx";
import BaitGuides from "./pages/BaitGuides.jsx";
import LakeAdventures from "./pages/LakeAdventures.jsx";
import TackleReviews from "./pages/TackleReviews.jsx";
import RetirementHobbies from "./pages/RetirementHobbies.jsx";
import FishingTips from "./pages/FishingTips.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Refund from "./pages/Refund.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    trackPageView(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/bait-guides" element={<BaitGuides />} />
          <Route path="/lake-adventures" element={<LakeAdventures />} />
          <Route path="/tackle-reviews" element={<TackleReviews />} />
          <Route path="/retirement-hobbies" element={<RetirementHobbies />} />
          <Route path="/fishing-tips" element={<FishingTips />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
