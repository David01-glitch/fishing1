import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cft-cookie-ok")) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cft-cookie-ok", "1");
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-lake-800 text-cream-50 rounded-2xl shadow-card p-5">
      <p className="text-sm leading-relaxed">
        We use cookies to improve your experience and analyze traffic. By continuing to browse, you agree to our use of cookies.
      </p>
      <div className="mt-3 flex gap-3">
        <button onClick={accept} className="btn btn-primary bg-cream-50 !text-lake-800 hover:bg-cream-100 px-4 py-2 text-sm">Accept</button>
        <a href="/privacy" className="btn btn-outline !border-cream-50 !text-cream-50 hover:!bg-cream-50 hover:!text-lake-800 px-4 py-2 text-sm">Learn more</a>
      </div>
    </div>
  );
}
