export function trackEvent(category, action, label) {
  if (!window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label
  });
}

export function trackPage(page) {
  if (!window.gtag) return;
  window.gtag("send", "pageview", page);
}
