import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-lake-800 text-cream-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-full bg-cream-50 text-lake-800 flex items-center justify-center font-serif">CF</span>
            <span className="font-serif text-lg font-semibold">Classic Fishing Tales</span>
          </div>
          <p className="text-sm text-cream-100/70 leading-relaxed">
            Fishing stories, bait guides, tackle reviews, and the calm joy of the outdoor life.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-base mb-3 text-cream-50">Explore</h4>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li><Link to="/stories" className="hover:text-cream-50">Fishing Stories</Link></li>
            <li><Link to="/bait-guides" className="hover:text-cream-50">Bait Guides</Link></li>
            <li><Link to="/lake-adventures" className="hover:text-cream-50">Lake Adventures</Link></li>
            <li><Link to="/tackle-reviews" className="hover:text-cream-50">Tackle Reviews</Link></li>
            <li><Link to="/retirement-hobbies" className="hover:text-cream-50">Retirement Hobbies</Link></li>
            <li><Link to="/fishing-tips" className="hover:text-cream-50">Fishing Tips</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-3 text-cream-50">Company</h4>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li><Link to="/about" className="hover:text-cream-50">About</Link></li>
            <li><Link to="/contact" className="hover:text-cream-50">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-cream-50">Blog</Link></li>
            <li><Link to="/tutorials" className="hover:text-cream-50">Tutorials</Link></li>
            <li><Link to="/community" className="hover:text-cream-50">Community</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-3 text-cream-50">Contact</h4>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li>418 River Bend Rd<br/>Tampa, FL 33602, USA</li>
            <li><a href="tel:+18135527104" className="hover:text-cream-50">+1 (813) 552-7104</a></li>
            <li><a href="mailto:classicfishingtales@gmail.com" className="hover:text-cream-50 break-all">classicfishingtales@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-100/70">
          <p>© {new Date().getFullYear()} Classic Fishing Tales. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-cream-50">Privacy</Link>
            <Link to="/terms" className="hover:text-cream-50">Terms</Link>
            <Link to="/refund" className="hover:text-cream-50">Refund</Link>
            <Link to="/about" className="hover:text-cream-50">About</Link>
            <Link to="/contact" className="hover:text-cream-50">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
