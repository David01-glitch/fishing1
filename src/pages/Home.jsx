import { Link } from "react-router-dom";
import Expandable from "../components/Expandable.jsx";
import { useState } from "react";
import { trackEvent } from "../utils/analytics.js";

import heroLake from "../assets/images/hero/fishing-lake.jpg";
import sunsetBoat from "../assets/images/hero/sunset-boat.jpg";
import catStories from "../assets/images/categories/stories.jpg";
import catBait from "../assets/images/categories/bait.jpg";
import catLakes from "../assets/images/categories/lakes.jpg";
import catTackle from "../assets/images/categories/tackle.jpg";
import catRetire from "../assets/images/categories/retirement.jpg";
import catTips from "../assets/images/categories/tips.jpg";
import story1 from "../assets/images/blog/story1.jpg";
import story2 from "../assets/images/blog/story2.jpg";
import story3 from "../assets/images/blog/story3.jpg";
import lake1 from "../assets/images/lakes/lake1.jpg";
import lake2 from "../assets/images/lakes/lake2.jpg";
import person1 from "../assets/images/community/person1.jpg";
import person2 from "../assets/images/community/person2.jpg";
import person3 from "../assets/images/community/person3.jpg";
import rod from "../assets/images/fishing/rod.jpg";

const categories = [
  { img: catStories, title: "Fishing Stories", desc: "True tales from quiet mornings on the water.", to: "/stories" },
  { img: catBait, title: "Bait Guides", desc: "What works, when it works, and why.", to: "/bait-guides" },
  { img: catLakes, title: "Lake Adventures", desc: "Hidden coves, big lakes, slow rivers.", to: "/lake-adventures" },
  { img: catTackle, title: "Tackle Reviews", desc: "Honest reviews of rods, reels, and gear.", to: "/tackle-reviews" },
  { img: catRetire, title: "Retirement Hobbies", desc: "Slow living and outdoor joy after 60.", to: "/retirement-hobbies" },
  { img: catTips, title: "Fishing Tips", desc: "Practical tips for every season.", to: "/fishing-tips" }
];

const stories = [
  { img: story1, title: "The Bass That Got Away on Cedar Lake", read: "8 min read", excerpt: "Last August, just after sunrise, I watched a 6-pound largemouth tail-walk across the cove and snap a 12-pound line like sewing thread.",
    body: "I had been fishing Cedar Lake for almost twenty years before that morning, and yet a single fish managed to humble me all over again. The fog was lifting off the shallows when I tossed a soft plastic worm into the shadow of a half-submerged oak. The hit was patient — almost polite — and then she ran. By the time I steadied myself in the boat, the leader was gone. I sat there for a long time, listening to the loons, and decided that some fish are meant to be lost. They are the ones we keep telling stories about." },
  { img: story2, title: "A Quiet Morning on the Hillsborough River", read: "6 min read", excerpt: "Tampa fog, warm coffee, and a soft pop of a topwater plug — some mornings are perfect before you even cast.",
    body: "I keep a small jon boat at a friend's dock just off the Hillsborough. On still mornings, the cypress knees rise out of mist and the only sound is the slap of mullet. I caught two small bass that day, both released, and lost count of how many turtles I watched cross the lily pads. The fishing was a side note. The morning was the catch." },
  { img: story3, title: "Crappie Season with Grandpa Earl", read: "10 min read", excerpt: "He taught me to tie a Palomar knot when I was seven, and forty years later I still hear his voice every time I cinch one down.",
    body: "Grandpa Earl fished slow. He believed every cast should be deliberate, that hurry scared the fish more than any clumsy line. We'd anchor over brush piles in late February, drop minnows beside crappie holding deep, and wait. He passed in 2019, but every spring I run his old jig box one more time. The fish still hit. That's the thing about good gear — and good people — they stay with you." }
];

const tackles = [
  { name: "Shimano Stradic FL 2500", rating: 4.8, summary: "Smooth as glass, light, and built to last. The drag is the star.",
    pros: ["Buttery drag", "Holds line memory low", "Comfortable for long days"], cons: ["Pricey for casuals"] },
  { name: "St. Croix Mojo Bass 7' MH", rating: 4.7, summary: "A workhorse for jig and worm fishing. Sensitive without being fragile.",
    pros: ["Telegraphs every nibble", "Forgiving on hooksets", "Solid warranty"], cons: ["A touch tip-heavy"] },
  { name: "Plano Edge 3700 Tackle Box", rating: 4.9, summary: "The end of rust on hooks and tangled plastics. Worth every penny.",
    pros: ["Rustrictor liner works", "Adjustable dividers", "Stackable"], cons: ["Lid latch could be better"] }
];

const testimonials = [
  { img: person1, name: "Walter H.", role: "Retired teacher, Ocala", quote: "I've been reading Classic Fishing Tales since 2022. It feels like sitting on a friend's porch, hearing a story you didn't know you needed." },
  { img: person2, name: "Linda R.", role: "Weekend angler, Tampa", quote: "The bait guides are honest, not sponsored junk. I caught my first 5-pound bass using their soft plastic breakdown." },
  { img: person3, name: "Tom K.", role: "Charter captain, Clearwater", quote: "Even after 30 years on the water, I learn something every week. Their tackle reviews are the most trustworthy I've found." }
];

const faqs = [
  { q: "What kind of fishing content do you cover?", a: "We focus on freshwater and inshore saltwater fishing — bass, crappie, bluegill, redfish, snook, and trout — with a calm, story-first style. Less hype, more honesty." },
  { q: "Are your tackle reviews sponsored?", a: "No. We buy gear with our own money, fish it for at least a season, and write what we actually think. If something is gifted, we say so plainly in the post." },
  { q: "Is the site good for beginners?", a: "Yes. Our Bait Guides and Fishing Tips sections start from the basics — knots, rod selection, simple presentations — and grow with you from there." },
  { q: "Do you cover fishing in Florida specifically?", a: "Often, yes. We're based in Tampa, so a lot of our lake stories are Florida lakes — Hillsborough, Tarpon Springs area, Lake Okeechobee — but readers from across the country contribute too." },
  { q: "How can I share my own story?", a: "Send a draft to classicfishingtales@gmail.com. If it fits our voice, we'll publish it with full credit. No fancy writing required — just an honest day on the water." }
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    trackEvent("newsletter_signup", { location: "home" });
    setSent(true);
    setEmail("");
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroLake} alt="Misty lake sunrise with fishing boat" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-lake-900/85 via-lake-800/70 to-lake-700/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-cream-50">
          <p className="uppercase tracking-widest text-xs text-cream-100/80 mb-4">Since 2018 · Tampa, FL</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold leading-tight max-w-3xl">
            Slow mornings. Quiet water. <br className="hidden sm:block"/> Stories worth telling.
          </h1>
          <p className="mt-6 text-lg text-cream-100/85 max-w-2xl leading-relaxed">
            Classic Fishing Tales is a calm corner of the internet for honest fishing stories, bait guides, lake adventures, tackle reviews, and the kind of outdoor life that runs on patience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/blog" className="btn btn-primary bg-cream-50 !text-lake-800 hover:bg-cream-100">Read the Blog</Link>
            <Link to="/about" className="btn btn-outline !border-cream-50 !text-cream-50 hover:!bg-cream-50 hover:!text-lake-800">Our Story</Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="uppercase tracking-widest text-xs text-forest-700 mb-3">Featured Categories</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-lake-800 font-semibold">Pick a corner of the lake</h2>
            <p className="text-lake-900/70 mt-3 leading-relaxed">Six places to settle in — choose whichever matches your morning.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(c => (
              <Link to={c.to} key={c.title} className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-card transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} loading="lazy" alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-lake-800 font-semibold">{c.title}</h3>
                  <p className="text-sm text-lake-900/70 mt-2 leading-relaxed">{c.desc}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-forest-700 group-hover:text-forest-800">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SHOWCASE WITH INLINE EXPAND */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="uppercase tracking-widest text-xs text-forest-700 mb-3">Story Showcase</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-lake-800 font-semibold">Fishing tales worth reading twice</h2>
            </div>
            <Link to="/blog" className="text-sm font-semibold text-lake-700 hover:text-lake-900">All stories →</Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {stories.map(s => (
              <article key={s.title} className="bg-cream-50 rounded-2xl overflow-hidden shadow-soft flex flex-col">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[16/10] object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-wider text-forest-700 mb-2">{s.read}</p>
                  <h3 className="font-serif text-xl text-lake-800 font-semibold">{s.title}</h3>
                  <p className="text-sm text-lake-900/75 mt-3 leading-relaxed">{s.excerpt}</p>
                  <Expandable className="mt-auto">
                    <p>{s.body}</p>
                  </Expandable>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LAKE ADVENTURE */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={lake1} alt="Calm lake at dawn" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover w-full shadow-soft" />
            <img src={lake2} alt="Lake reflection in summer" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover w-full shadow-soft mt-8" />
          </div>
          <div>
            <p className="uppercase tracking-widest text-xs text-forest-700 mb-3">Lake Adventures</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-lake-800 font-semibold">A year of water, one lake at a time</h2>
            <p className="text-lake-900/75 mt-4 leading-relaxed">
              We spend full seasons on a single lake before we write about it — mapping coves, learning the wind, watching how the bait moves. The result is a slow, careful guide you can actually fish from, not just read.
            </p>
            <Expandable>
              <p>Our most-read lake guides include Lake Tarpon's winter crappie pattern, the Hillsborough River's tidal snook windows, and Cedar Lake's late-summer frog bite. Each piece comes with a launch map, a seasonal calendar, and the specific baits we used — color, size, weight, and time of day.</p>
              <p>We never publish from a single trip. If we haven't fished the water in at least three different months, the article waits.</p>
            </Expandable>
            <Link to="/lake-adventures" className="btn btn-primary mt-6">Browse Lake Adventures</Link>
          </div>
        </div>
      </section>

      {/* TACKLE REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="uppercase tracking-widest text-xs text-forest-700 mb-3">Tackle Reviews</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-lake-800 font-semibold">Gear we actually use</h2>
            <p className="text-lake-900/70 mt-3 leading-relaxed">No paid placements. Every item below has been fished hard for at least a full season.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tackles.map(t => (
              <div key={t.name} className="bg-cream-50 rounded-2xl p-6 shadow-soft border border-cream-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-lg text-lake-800 font-semibold">{t.name}</h3>
                  <span className="text-sm font-semibold text-forest-700">★ {t.rating}</span>
                </div>
                <p className="text-sm text-lake-900/75 leading-relaxed">{t.summary}</p>
                <Expandable>
                  <div>
                    <p className="font-semibold text-lake-800">Pros</p>
                    <ul className="list-disc pl-5 text-sm mt-1 space-y-1">{t.pros.map(p => <li key={p}>{p}</li>)}</ul>
                  </div>
                  <div>
                    <p className="font-semibold text-lake-800">Cons</p>
                    <ul className="list-disc pl-5 text-sm mt-1 space-y-1">{t.cons.map(p => <li key={p}>{p}</li>)}</ul>
                  </div>
                </Expandable>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-lake-800 text-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="uppercase tracking-widest text-xs text-cream-100/70 mb-3">From Our Community</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold">Readers we're proud to fish with</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <figure key={t.name} className="bg-lake-700/60 rounded-2xl p-6 backdrop-blur">
                <blockquote className="text-cream-50/90 leading-relaxed text-sm">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={t.img} alt={t.name} loading="lazy" className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-cream-50">{t.name}</p>
                    <p className="text-xs text-cream-100/70">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src={sunsetBoat} alt="Boat at sunset" loading="lazy" className="w-full h-48 object-cover rounded-2xl shadow-soft mb-8" />
          <h2 className="font-serif text-3xl sm:text-4xl text-lake-800 font-semibold">One quiet email a month</h2>
          <p className="text-lake-900/75 mt-3 leading-relaxed">A short note with our best new story, a bait tip, and one lake worth visiting. No spam, no upsells.</p>
          <form onSubmit={onSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full border border-cream-200 bg-white focus:outline-none focus:ring-2 focus:ring-lake-700/30"
            />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
          {sent && <p className="text-forest-700 mt-3 text-sm">Thanks — you're on the list.</p>}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-xs text-forest-700 mb-3">FAQ</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-lake-800 font-semibold">Things readers ask us</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="uppercase tracking-widest text-xs text-forest-700 mb-3">Get in Touch</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-lake-800 font-semibold">Say hello, share a story</h2>
            <p className="text-lake-900/75 mt-4 leading-relaxed">
              We love hearing about your water. Send us a photo, a story, a question — or just a wave from your lake.
            </p>
            <img src={rod} alt="Fishing rod and reel" loading="lazy" className="w-full rounded-2xl mt-6 shadow-soft aspect-[16/10] object-cover" />
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-7">
            <div className="space-y-4 text-sm text-lake-900/85">
              <div>
                <p className="text-xs uppercase tracking-wider text-forest-700">Address</p>
                <p className="mt-1">418 River Bend Rd, Tampa, FL 33602, USA</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-forest-700">Phone</p>
                <a href="tel:+18135527104" className="mt-1 block hover:text-lake-700">+1 (813) 552-7104</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-forest-700">Email</p>
                <a href="mailto:classicfishingtales@gmail.com" className="mt-1 block hover:text-lake-700 break-all">classicfishingtales@gmail.com</a>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary mt-7 w-full">Open Contact Page</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-cream-200 rounded-2xl bg-cream-50/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left px-5 py-4"
      >
        <span className="font-medium text-lake-800">{q}</span>
        <span className={`text-lake-700 transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <p className="px-5 pb-5 text-sm text-lake-900/75 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
