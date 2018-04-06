export function trackEvent(category, action, label) {
  if (!window.ga) return;
  window.ga("send", {
    hitType: "event",
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
}

export function trackPage() {
  if (!window.ga) return;
  window.ga("send", "pageview");
}
