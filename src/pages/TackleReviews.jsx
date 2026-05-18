import CategoryPage from "../components/CategoryPage.jsx";
import t1 from "../assets/images/categories/tackle.jpg";
import t2 from "../assets/images/fishing/rod.jpg";
import t3 from "../assets/images/blog/story6.jpg";

export default function TackleReviews() {
  const articles = [
    { img: t1, meta: "Review · ★ 4.8", title: "Shimano Stradic FL 2500 — One Season In", excerpt: "Smooth as glass, light, and built to last. The drag is the star.",
      body: "Eight months. Over 200 trips. No drag drama, no bail issues, no scratchy retrieve. The Hagane gear feels noticeably tighter than the older Stradic CI4. Pricey for casual anglers, but if you fish weekly you'll never regret it." },
    { img: t2, meta: "Review · ★ 4.7", title: "St. Croix Mojo Bass 7' MH", excerpt: "A workhorse for jig and worm fishing. Sensitive without being fragile.",
      body: "I fished it for the entire 2024 season as my main bottom-contact rod. The blank telegraphs every nibble through a 1/4 oz weight, and the hooksets feel forgiving on heavier braid. A touch tip-heavy with a Stradic 4000, but balanced with a 2500." },
    { img: t3, meta: "Review · ★ 4.9", title: "Plano Edge 3700 Tackle Box", excerpt: "The end of rust on hooks and tangled plastics. Worth every penny.",
      body: "The Rustrictor liner does what it claims. Hooks I left wet for two weeks didn't develop the orange haze they always used to. Adjustable dividers hold even the smallest crankbaits in place. One lid latch felt flimsy after a year; everything else is bulletproof." }
  ];
  return <CategoryPage eyebrow="Category" title="Tackle Reviews" subtitle="Honest reviews of rods, reels, and gear we actually use."
    intro="We buy our own gear and fish it for a season before writing. If anything is gifted, we say so on the page." articles={articles} />;
}
