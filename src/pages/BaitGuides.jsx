import CategoryPage from "../components/CategoryPage.jsx";
import b1 from "../assets/images/categories/bait.jpg";
import b2 from "../assets/images/blog/story5.jpg";
import b3 from "../assets/images/blog/story6.jpg";

export default function BaitGuides() {
  const articles = [
    { img: b1, meta: "Guide · 7 min", title: "Soft Plastic Worms: Color Choice Demystified", excerpt: "Watermelon, green pumpkin, junebug — when each one actually wins.",
      body: "Clear water and bright sun: natural translucent colors. Stained water: dark with a chartreuse tail. Cloudy day, falling pressure: solid black or junebug. These four rules have outperformed every fancy color chart I've ever paid for." },
    { img: b2, meta: "Guide · 9 min", title: "Live Bait vs. Artificials: An Honest Look", excerpt: "When real shiners actually outfish a perfectly fished jig — and when they don't.",
      body: "Live shiners crush cold-front bass in winter; artificials win on aggressive post-spawn fish. The decision usually comes down to time. Got two hours? Throw plastics. Got all morning and a livewell? Run shiners." },
    { img: b3, meta: "Guide · 6 min", title: "Crappie Jig Sizes by Season", excerpt: "1/32, 1/16, 1/8 — when to fish each, and the one I never leave home without.",
      body: "Pre-spawn: 1/16 oz, vertical over brush. Spawn: 1/32 oz, slow-fall under a bobber. Summer: 1/8 oz, deep over standing timber. Fall: back to 1/16. The 1/16 oz chartreuse-on-white is the jig I'd keep if I had to keep only one." }
  ];
  return <CategoryPage eyebrow="Category" title="Bait Guides" subtitle="What works, when it works, and why."
    intro="No sponsored picks. Every bait below has spent at least a full season in our boxes." articles={articles} />;
}
