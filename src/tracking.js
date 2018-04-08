export function trackEvent(category, action, label) {
  if (!window.ga) return;
  window.ga("send", "event", category, action, label);
}

export function trackPage() {
  if (!window.ga) return;
  window.ga("send", "pageview");
}
