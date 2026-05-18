import PageHeader from "../components/PageHeader.jsx";
import Expandable from "../components/Expandable.jsx";
import t1 from "../assets/images/tutorials/tutorial1.jpg";
import t2 from "../assets/images/tutorials/tutorial2.jpg";
import t3 from "../assets/images/tutorials/tutorial3.jpg";

const tutorials = [
  { img: t1, level: "Beginner", title: "How to Tie the Palomar Knot (and Why It's the Only Knot You Need)", time: "5 min",
    body: "Step 1: Double 6 inches of line and pass the loop through the hook eye. Step 2: Tie a loose overhand knot in the doubled line, hook hanging below. Step 3: Pull the loop down and over the hook. Step 4: Wet the knot and cinch slowly. The Palomar tests near 100% line strength. Use it on braid, fluorocarbon, mono — anything you'd put a hook on." },
  { img: t2, level: "Intermediate", title: "Reading Lake Structure With a Cheap Map", time: "12 min",
    body: "Forget side-imaging for a minute. A printed contour map and ten minutes of study will out-fish a $1500 unit if you skip the work. Look for the 'first break' — the depth where shallow flats start tipping toward the basin. In Florida that's often 6 to 9 feet. Bass and crappie use that line like a highway. Identify points and inside turns along it, and you'll have three weeks of fishing on any new lake." },
  { img: t3, level: "All levels", title: "A Calm, Patient Approach to Catching Big Bass", time: "8 min",
    body: "Big bass don't hunt; they ambush. They sit. So you sit too. Pick the most boring-looking laydown on the bank and cast a Texas-rigged worm onto the deep side. Let it sit on the bottom for a full ten seconds. Twitch once. Wait another ten. Most strikes happen on the third or fourth lift. Hurry kills more big-fish chances than bad gear ever did." }
];

export default function Tutorials() {
  return (
    <>
      <PageHeader eyebrow="Tutorials" title="Learn the slow way" subtitle="Short, practical lessons you can actually use the next time you're on the water." />
      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {tutorials.map(t => (
            <article key={t.title} className="bg-white rounded-2xl shadow-soft overflow-hidden grid md:grid-cols-5 gap-0">
              <img src={t.img} alt={t.title} loading="lazy" className="md:col-span-2 w-full h-full aspect-[4/3] object-cover" />
              <div className="md:col-span-3 p-6 flex flex-col">
                <p className="text-xs uppercase tracking-wider text-forest-700">{t.level} · {t.time}</p>
                <h3 className="font-serif text-2xl text-lake-800 font-semibold mt-2">{t.title}</h3>
                <Expandable className="mt-3"><p>{t.body}</p></Expandable>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
