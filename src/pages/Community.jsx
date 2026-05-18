import PageHeader from "../components/PageHeader.jsx";
import Expandable from "../components/Expandable.jsx";
import p1 from "../assets/images/community/person1.jpg";
import p2 from "../assets/images/community/person2.jpg";
import p3 from "../assets/images/community/person3.jpg";

const members = [
  { img: p1, name: "Walter H.", city: "Ocala, FL", bio: "Retired teacher, 40 years on Florida lakes. Loves topwater frog fishing in August." },
  { img: p2, name: "Linda R.", city: "Tampa, FL", bio: "Weekend angler. Recently caught her first 5 lb bass on a junebug worm." },
  { img: p3, name: "Tom K.", city: "Clearwater, FL", bio: "Charter captain. Inshore redfish, snook, and the occasional offshore grouper." }
];

export default function Community() {
  return (
    <>
      <PageHeader eyebrow="Community" title="The people who fish with us" subtitle="Readers, writers, and weekend anglers — Classic Fishing Tales is what it is because of them." />
      <section className="py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {members.map(m => (
            <div key={m.name} className="bg-white rounded-2xl shadow-soft p-6 text-center">
              <img src={m.img} alt={m.name} loading="lazy" className="w-20 h-20 rounded-full mx-auto object-cover" />
              <h3 className="font-serif text-xl text-lake-800 font-semibold mt-4">{m.name}</h3>
              <p className="text-xs uppercase tracking-wider text-forest-700 mt-1">{m.city}</p>
              <p className="text-sm text-lake-900/75 mt-3 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-lake-800 font-semibold">Submit a story</h2>
          <p className="text-lake-900/80 mt-4 leading-relaxed">
            Email your draft and 1–2 photos to <a href="mailto:classicfishingtales@gmail.com" className="text-lake-700 underline">classicfishingtales@gmail.com</a>. We read every one. No fancy writing required — just an honest day on the water.
          </p>
          <Expandable className="mt-6">
            <p>What we look for: 500–1500 words, a clear setting, a specific lake or river, and at least one moment that surprised you. We edit lightly and never change your voice.</p>
            <p>If we publish your piece, you'll get full credit, a link back to your social or site, and a free Classic Fishing Tales hat.</p>
          </Expandable>
        </div>
      </section>
    </>
  );
}
