export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-lake-800 text-cream-50 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && <p className="uppercase tracking-widest text-xs text-cream-100/70 mb-3">{eyebrow}</p>}
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mb-4">{title}</h1>
        {subtitle && <p className="text-cream-100/85 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
