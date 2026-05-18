import CategoryPage from "../components/CategoryPage.jsx";
import l1 from "../assets/images/lakes/lake1.jpg";
import l2 from "../assets/images/lakes/lake2.jpg";
import l3 from "../assets/images/categories/lakes.jpg";

export default function LakeAdventures() {
  const articles = [
    { img: l1, meta: "Adventure · 11 min", title: "A Season on Lake Tarpon", excerpt: "Winter crappie, spring bass, summer bluegill — one lake, twelve months.",
      body: "Lake Tarpon rewards anglers who slow down. Crappie school in November along the south basin's 12-foot break. By March the bass are bedding around the western canals. By June the bluegill bite turns into a kid's dream. We fished it once a month for a year, and learned the rhythm of one of Florida's most underrated lakes." },
    { img: l2, meta: "Adventure · 9 min", title: "Tides and Snook on the Hillsborough", excerpt: "The two hours of falling tide that matter more than every other minute combined.",
      body: "Snook stack on outside bends as the tide drops. We found three reliable spots between downtown and the dam where a moving paddletail will produce 8 fish on a good morning. The exact window: 90 minutes after high tide through the next two hours of fall." },
    { img: l3, meta: "Adventure · 8 min", title: "Hidden Coves of Cedar Lake", excerpt: "Three pockets most boats run past — and the bass that live in them.",
      body: "The first cove is on the north end, just past a fallen oak. The second is unnamed on most maps, tucked behind a sandbar near the boat ramp. The third only opens in summer when the lily pads thin. All three reward a slow trolling motor and a Texas-rigged worm." }
  ];
  return <CategoryPage eyebrow="Category" title="Lake Adventures" subtitle="Hidden coves, big lakes, slow rivers — written from full seasons on the water."
    intro="We don't write about a lake until we've fished it at least three times in three different months." articles={articles} />;
}
