import CategoryPage from "../components/CategoryPage.jsx";
import s1 from "../assets/images/blog/story1.jpg";
import s2 from "../assets/images/blog/story2.jpg";
import s3 from "../assets/images/blog/story3.jpg";

export default function Stories() {
  const articles = [
    { img: s1, meta: "Story · 8 min", title: "The Bass That Got Away on Cedar Lake", excerpt: "A 6-pound largemouth, a 12-pound line, and a long quiet ride home.",
      body: "She tail-walked twice and was gone by the third. I sat in the boat for almost an hour after, watching the herons cross the cove. Some fish are meant to stay in the lake. The ones we remember are usually the ones we lost." },
    { img: s2, meta: "Story · 6 min", title: "Quiet Morning on the Hillsborough River", excerpt: "Tampa fog, warm coffee, and a soft pop of a topwater plug.",
      body: "Two small bass came on a Pop-R that morning. Both went back. The cypress fog did most of the talking, and that was just fine. The catch wasn't the fish — it was the silence." },
    { img: s3, meta: "Story · 10 min", title: "Crappie Season with Grandpa Earl", excerpt: "Forty years on, I still hear his voice every time I cinch a Palomar.",
      body: "He believed every cast should be deliberate. We'd anchor over brush piles in late February, drop minnows on long crappie poles, and just wait. The fish still hit his old jig box every spring." }
  ];
  return <CategoryPage eyebrow="Category" title="Fishing Stories" subtitle="True tales from quiet mornings on the water."
    intro="Every story here happened on a real lake, with a real rod, on a real morning. We don't make things up." articles={articles} />;
}
