import LegalLayout from "../components/LegalLayout.jsx";

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="May 1, 2026">
      <p>By accessing classicfishingtales.com you agree to these terms. If you don't agree, please don't use the site.</p>

      <h3 className="font-serif text-2xl text-lake-800">Use of content</h3>
      <p>All articles, photos, and graphics on this site are the property of Classic Fishing Tales unless otherwise stated. You may share excerpts with attribution and a link back to the original page. You may not republish full articles without written permission.</p>

      <h3 className="font-serif text-2xl text-lake-800">User submissions</h3>
      <p>By submitting a story or photo, you confirm you are the author or have permission to share it, and you grant us a non-exclusive license to publish and promote your work on the site and our channels.</p>

      <h3 className="font-serif text-2xl text-lake-800">Accuracy</h3>
      <p>Fishing involves natural elements that change. Our tips and guides reflect our own experiences and are shared in good faith. Always check local fishing regulations and weather before going out.</p>

      <h3 className="font-serif text-2xl text-lake-800">Liability</h3>
      <p>We are not liable for any injury, loss, or damages arising from use of the information on this site.</p>

      <h3 className="font-serif text-2xl text-lake-800">Contact</h3>
      <p>Classic Fishing Tales · 418 River Bend Rd, Tampa, FL 33602, USA · classicfishingtales@gmail.com · +1 (813) 552-7104</p>
    </LegalLayout>
  );
}
