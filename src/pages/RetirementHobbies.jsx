import CategoryPage from "../components/CategoryPage.jsx";
import r1 from "../assets/images/categories/retirement.jpg";
import r2 from "../assets/images/blog/story4.jpg";
import r3 from "../assets/images/community/person1.jpg";

export default function RetirementHobbies() {
  const articles = [
    { img: r1, meta: "Lifestyle · 7 min", title: "Why Fishing Is the Best Retirement Hobby", excerpt: "Cheap, social, calming, and good for your shoulders.",
      body: "Fishing gives you gentle movement, long stretches of focused attention, and a real-world social network — three things that protect mental sharpness in retirement. Start with a 6'6 medium spinning combo, a pack of curly-tail grubs, and a bucket. That's the entry kit." },
    { img: r2, meta: "Lifestyle · 6 min", title: "Building a Weekly Fishing Routine After 65", excerpt: "Three trips a week, no pressure, no expensive gear.",
      body: "Tuesday is local pond morning. Thursday is the lake with a friend. Saturday is whatever you want. Keep one rod rigged in the truck. Keep a folder with weather. The routine matters more than the catch — and the catch shows up anyway." },
    { img: r3, meta: "Reader Story · 5 min", title: "Walter's First Year Back on the Water", excerpt: "After 20 years away, what surprised him most about coming back.",
      body: "He thought he'd forgotten everything. But the second cast came back exactly like it used to. The line, the rod, the way water sounds when it's almost still — none of it left. Only the impatience was gone." }
  ];
  return <CategoryPage eyebrow="Category" title="Retirement Hobbies" subtitle="Slow living and outdoor joy after 60."
    intro="A growing section of the site dedicated to the joys of fishing in retirement — written by readers who are living it." articles={articles} />;
}
