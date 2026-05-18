import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { trackEvent } from "../utils/analytics.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    trackEvent("contact_form_submit");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHeader eyebrow="Contact" title="Drop us a line" subtitle="Story idea, gear question, a lake we should visit — send it over." />
      <section className="py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-soft p-7">
            <h2 className="font-serif text-2xl text-lake-800 font-semibold">Contact details</h2>
            <ul className="mt-6 space-y-5 text-sm text-lake-900/85">
              <li>
                <p className="text-xs uppercase tracking-wider text-forest-700">Address</p>
                <p className="mt-1">418 River Bend Rd, Tampa, FL 33602, USA</p>
              </li>
              <li>
                <p className="text-xs uppercase tracking-wider text-forest-700">Phone</p>
                <a href="tel:+18135527104" className="mt-1 block hover:text-lake-700">+1 (813) 552-7104</a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-wider text-forest-700">Email</p>
                <a href="mailto:classicfishingtales@gmail.com" className="mt-1 block hover:text-lake-700 break-all">classicfishingtales@gmail.com</a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-wider text-forest-700">Hours</p>
                <p className="mt-1">Mon–Fri · 9am–5pm EST</p>
              </li>
            </ul>
          </div>

          <form onSubmit={submit} className="bg-white rounded-2xl shadow-soft p-7 space-y-4">
            <h2 className="font-serif text-2xl text-lake-800 font-semibold">Send a message</h2>
            <div>
              <label className="text-sm text-lake-900/80">Name</label>
              <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-lake-700/30" />
            </div>
            <div>
              <label className="text-sm text-lake-900/80">Email</label>
              <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-lake-700/30" />
            </div>
            <div>
              <label className="text-sm text-lake-900/80">Message</label>
              <textarea required rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                className="mt-1 w-full px-4 py-2.5 rounded-xl border border-cream-200 focus:outline-none focus:ring-2 focus:ring-lake-700/30 resize-none" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
            {sent && <p className="text-forest-700 text-sm">Thanks — we'll reply within a day or two.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
