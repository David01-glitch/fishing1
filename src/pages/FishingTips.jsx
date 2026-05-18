import CategoryPage from "../components/CategoryPage.jsx";
import t1 from "../assets/images/categories/tips.jpg";
import t2 from "../assets/images/tutorials/tutorial1.jpg";
import t3 from "../assets/images/tutorials/tutorial3.jpg";

export default function FishingTips() {
  const articles = [
    { img: t1, meta: "Tip · 5 min", title: "Five Knots That Cover 95% of Fishing", excerpt: "Palomar, Improved Clinch, Uni, Loop, and the FG.",
      body: "Palomar for terminal tackle. Improved Clinch for monofilament. Uni for joining fluorocarbon leader. Non-slip loop knot for jerkbaits and topwater. FG for braid-to-leader. Master those five and you'll never feel under-equipped on the water." },
    { img: t2, meta: "Tip · 4 min", title: "Read the Wind Before You Cast", excerpt: "Why a 5-mph breeze is the best fishing weather you'll ever get.",
      body: "Wind pushes bait against shorelines and breaks up surface glare. A 5–10 mph wind from behind a point is the single best topwater bass condition we've found. Calm and bluebird is the hardest. Slow down, fish deeper, and downsize." },
    { img: t3, meta: "Tip · 6 min", title: "The 10-Second Rule for Big Bass", excerpt: "If you're moving the lure, you're probably moving past the fish.",
      body: "Cast, sink to the bottom, count to ten. Twitch once. Count to ten. Twitch again. Most strikes happen on the third or fourth lift. Big fish reward patience more than they reward technique." }
  ];
  return <CategoryPage eyebrow="Category" title="Fishing Tips" subtitle="Practical, no-fluff tips for every season."
    intro="Short, useful tips from years of mistakes. Try one this weekend." articles={articles} />;
}
