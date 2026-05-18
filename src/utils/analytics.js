export const trackEvent = (name, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};

export const trackPageView = (path) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", "G-4J046JXWVC", { page_path: path });
  }
};
