import PageHeader from "./PageHeader.jsx";

export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} subtitle={`Last updated: ${updated}`} />
      <section className="py-16 bg-cream-50">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lake">
          <div className="space-y-6 text-lake-900/85 leading-relaxed">{children}</div>
        </article>
      </section>
    </>
  );
}
