import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream-50">
      <div className="text-center px-4 py-20">
        <p className="uppercase tracking-widest text-xs text-forest-700 mb-3">404</p>
        <h1 className="font-serif text-5xl sm:text-6xl text-lake-800 font-semibold">The lake is calm. The page is missing.</h1>
        <p className="text-lake-900/75 mt-5 max-w-lg mx-auto leading-relaxed">
          We couldn't find what you were looking for. Maybe try one of the trails below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-primary">Back home</Link>
          <Link to="/blog" className="btn btn-outline">Read the blog</Link>
        </div>
      </div>
    </section>
  );
}
