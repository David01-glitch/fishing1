import PageHeader from "../components/PageHeader.jsx";
import Expandable from "../components/Expandable.jsx";
import sunsetBoat from "../assets/images/hero/sunset-boat.jpg";
import retire from "../assets/images/categories/retirement.jpg";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A calm corner of the internet for fishing lovers"
        subtitle="We started Classic Fishing Tales in 2018 from a small dock in Tampa. We're still here, still slow, still writing."
      />
      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <img src={sunsetBoat} alt="Sunset over the lake" className="rounded-2xl shadow-soft w-full aspect-[4/3] object-cover" />
          <div>
            <h2 className="font-serif text-3xl text-lake-800 font-semibold">Our story</h2>
            <p className="text-lake-900/80 mt-4 leading-relaxed">
              The site started as a notebook. After 30 years on Florida lakes, Walter wanted a place to write down what he'd learned — knots, weather, the way bass tuck into shade in August. A few readers turned into a few thousand, and Classic Fishing Tales became a slow-growing community of anglers who'd rather read a careful story than scroll a feed.
            </p>
            <Expandable>
              <p>Today we're a small team — Walter, his daughter Rachel, and three regular contributors from Florida and Georgia. We publish one or two pieces a week. No sponsored junk. No "top 10" filler. Just the kind of writing we'd want to read on a rainy afternoon when we can't fish.</p>
              <p>If you want to read more about how we test gear, see our <a href="/tackle-reviews" className="text-lake-700 underline">Tackle Reviews</a> page.</p>
            </Expandable>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl text-lake-800 font-semibold">What we believe</h2>
            <ul className="mt-4 space-y-3 text-lake-900/80 leading-relaxed">
              <li>• A slow morning on the water is worth more than a full livewell.</li>
              <li>• Honest reviews matter more than first reviews.</li>
              <li>• Catch and release isn't a rule — it's a habit worth keeping.</li>
              <li>• Retirement is a great time to take up fishing, not stop.</li>
              <li>• A good story doesn't need a big fish at the end.</li>
            </ul>
          </div>
          <img src={retire} alt="Retired angler at lake" className="rounded-2xl shadow-soft w-full aspect-[4/3] object-cover order-1 md:order-2" />
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-lake-800 font-semibold">Where we're based</h2>
          <p className="text-lake-900/80 mt-4 leading-relaxed">
            418 River Bend Rd, Tampa, FL 33602, USA. The Hillsborough River runs just a few minutes from our front door, which is how most of our stories begin.
          </p>
        </div>
      </section>
    </>
  );
}
