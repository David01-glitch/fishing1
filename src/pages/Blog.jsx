import PageHeader from "../components/PageHeader.jsx";
import Expandable from "../components/Expandable.jsx";
import s1 from "../assets/images/blog/story1.jpg";
import s2 from "../assets/images/blog/story2.jpg";
import s3 from "../assets/images/blog/story3.jpg";
import s4 from "../assets/images/blog/story4.jpg";
import s5 from "../assets/images/blog/story5.jpg";
import s6 from "../assets/images/blog/story6.jpg";

const posts = [
  { img: s1, cat: "Fishing Stories", title: "The Bass That Got Away on Cedar Lake", date: "Aug 14, 2025", excerpt: "A 6-pound largemouth, a 12-pound line, and a quiet lesson in patience.",
    body: "There's a stump on the north end of Cedar Lake that's been holding fish for as long as I've been fishing it. That morning the wind was just enough to ripple the surface, the soft plastic worm sank into the shadow, and she ate it as politely as a fish ever has. The fight lasted six seconds before the leader broke clean. I sat in the boat for almost an hour after, and I'm not embarrassed to say it." },
  { img: s2, cat: "Lake Adventures", title: "Quiet Morning on the Hillsborough River", date: "Jul 22, 2025", excerpt: "Tampa fog, warm coffee, a topwater plug — some mornings are perfect before you cast.",
    body: "I keep a small jon boat at a friend's dock just off the Hillsborough. We pushed off at 5:48, drifted past the cypress knees, and the only sound was the slap of mullet. Two small bass came on a Pop-R. Both went back. The mist did most of the talking that morning." },
  { img: s3, cat: "Fishing Stories", title: "Crappie Season with Grandpa Earl", date: "Mar 02, 2025", excerpt: "Forty years on, I still hear his voice every time I cinch down a Palomar knot.",
    body: "Grandpa Earl believed every cast should be deliberate. We'd anchor over brush piles in late February, drop minnows on long crappie poles, and just wait. He passed in 2019. Every spring I still run his old jig box one more time — and the fish still hit." },
  { img: s4, cat: "Retirement Hobbies", title: "Why Fishing Is the Best Retirement Hobby", date: "Feb 12, 2025", excerpt: "Cheap, social, calming, and good for your shoulders. The case for picking it up at 65.",
    body: "Walking is great. Reading is great. But fishing gives you all three — gentle movement, a long quiet stretch of attention, and a slow social network of people who actually answer the phone. Start with a 6'6 medium spinning combo, a pack of curly-tail grubs, and a bucket. That's all you need to begin." },
  { img: s5, cat: "Bait Guides", title: "Soft Plastic Worms: Color Choice Demystified", date: "Jan 19, 2025", excerpt: "Watermelon, green pumpkin, junebug — when each one actually outfishes the others.",
    body: "Clearer water, more natural colors. Stained water, dark with a chartreuse tail. Bright sun, translucent. Low light, solid. After ten years of testing on the same Florida lakes, those four rules have outperformed every fancy color chart I've ever paid for." },
  { img: s6, cat: "Tackle Reviews", title: "One Season With the Shimano Stradic FL", date: "Dec 04, 2024", excerpt: "Eight months, 200+ trips, no drag drama. Here's the honest verdict.",
    body: "I bought it with my own money in March and fished it nearly every weekend through November. The drag is the standout — smooth at every setting, never sticky on a hot run. The handle knob took some getting used to, but the bail return is crisp. Worth the price if you fish a lot. If you fish four times a year, get the Sienna." }
];

export default function Blog() {
  return (
    <>
      <PageHeader eyebrow="Blog" title="Fishing tales, slow and honest" subtitle="One or two pieces a week. Read whichever fits the morning." />
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          {posts.map(p => (
            <article key={p.title} className="bg-white rounded-2xl shadow-soft overflow-hidden flex flex-col">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full aspect-[16/9] object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-wider text-forest-700">{p.cat} · {p.date}</p>
                <h3 className="font-serif text-2xl text-lake-800 font-semibold mt-2">{p.title}</h3>
                <p className="text-lake-900/75 mt-3 leading-relaxed">{p.excerpt}</p>
                <Expandable className="mt-auto"><p>{p.body}</p></Expandable>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
