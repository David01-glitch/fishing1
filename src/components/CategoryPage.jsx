import PageHeader from "./PageHeader.jsx";
import Expandable from "./Expandable.jsx";

export default function CategoryPage({ eyebrow, title, subtitle, intro, articles }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {intro && <p className="text-lake-900/80 leading-relaxed text-lg mb-10 max-w-3xl">{intro}</p>}
          <div className="space-y-8">
            {articles.map(a => (
              <article key={a.title} className="bg-white rounded-2xl shadow-soft overflow-hidden grid md:grid-cols-5">
                <img src={a.img} alt={a.title} loading="lazy" className="md:col-span-2 w-full h-full aspect-[4/3] object-cover" />
                <div className="md:col-span-3 p-6 flex flex-col">
                  <p className="text-xs uppercase tracking-wider text-forest-700">{a.meta}</p>
                  <h3 className="font-serif text-2xl text-lake-800 font-semibold mt-2">{a.title}</h3>
                  <p className="text-lake-900/75 mt-3 leading-relaxed">{a.excerpt}</p>
                  <Expandable className="mt-auto"><p>{a.body}</p></Expandable>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
