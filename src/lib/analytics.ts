export const GA_MEASUREMENT_ID = 'G-KDVSC30EQ8';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export const trackEvent = (
  name: string,
  params?: Record<string, unknown>,
) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
};
