export function trackEvent(name, params = {}) {
  try {
    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", name, params)
        return
      }
      if (typeof window.plausible === "function") {
        window.plausible(name, { props: params })
        return
      }
    }
  } catch (_) {
    // ignore analytics errors
  }

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", name, params)
  }
}

