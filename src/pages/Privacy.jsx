import LegalLayout from "../components/LegalLayout.jsx";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="May 1, 2026">
      <p>Classic Fishing Tales ("we", "our", "us") operates classicfishingtales.com. This Privacy Policy explains what information we collect, how we use it, and your choices.</p>

      <h3 className="font-serif text-2xl text-lake-800">Information we collect</h3>
      <p>We collect information you provide directly — for example, your email when you subscribe to our newsletter or your name and message when you contact us. We also collect basic analytics such as page views, device type, and approximate location through Google Analytics.</p>

      <h3 className="font-serif text-2xl text-lake-800">How we use information</h3>
      <p>We use the information to send our newsletter, respond to inquiries, improve our content, and understand how readers use the site. We never sell your personal data.</p>

      <h3 className="font-serif text-2xl text-lake-800">Cookies</h3>
      <p>We use a small number of cookies for analytics and to remember your acceptance of this notice. You can clear cookies any time through your browser settings.</p>

      <h3 className="font-serif text-2xl text-lake-800">Third parties</h3>
      <p>We use Google Analytics. Their privacy policy is available on their website. We do not run third-party advertising at this time.</p>

      <h3 className="font-serif text-2xl text-lake-800">Your rights</h3>
      <p>You can request access to, correction of, or deletion of your personal data by emailing classicfishingtales@gmail.com. We respond within 30 days.</p>

      <h3 className="font-serif text-2xl text-lake-800">Contact</h3>
      <p>Classic Fishing Tales<br/>418 River Bend Rd, Tampa, FL 33602, USA<br/>Email: classicfishingtales@gmail.com<br/>Phone: +1 (813) 552-7104</p>
    </LegalLayout>
  );
}
