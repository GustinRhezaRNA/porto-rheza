// Shared between the blocking inline script in root.tsx's <head> (which runs
// before first paint and decides whether to show the CSS curtain) and
// Preloader.tsx (the animated layer). Keeping the names here means the two
// can't silently drift out of sync.
export const PRELOADER_SESSION_KEY = "gr-preloader-seen";
export const PRELOADER_ATTR = "data-preloader";

// The same decision, mirrored onto `window` by the boot script. The <html>
// attribute alone isn't reliable: if hydration fails (React #418 — e.g. a
// browser extension edits the DOM before React boots), React falls back to a
// full client render, re-acquires <html>, and strips every attribute on it,
// including this one. A window property survives that, so Preloader.tsx can
// still read the decision and put the attribute back.
export const PRELOADER_FLAG = "__grPreloader";

declare global {
  interface Window {
    __grPreloader?: boolean;
  }
}

// True while the preloader is (or is about to be) showing on this load.
export function isPreloaderPending(): boolean {
  return (
    document.documentElement.getAttribute(PRELOADER_ATTR) === "1" ||
    window[PRELOADER_FLAG] === true
  );
}

// How long the counter is guaranteed to run for, and the hard ceiling it
// will never wait past — see Preloader.tsx for what it's actually timed
// against (document.fonts.ready, not a fake delay).
export const PRELOADER_MIN_MS = 700;
export const PRELOADER_CAP_MS = 2000;

// Fired on `window` the instant Preloader.tsx starts its exit transition.
// Any page-entrance animation gated only on document.fonts.ready would
// otherwise finish invisibly underneath the still-opaque curtain — by the
// time the curtain clears, the entrance is already in its settled end
// state, and looks like it never played. Sections with their own entrance
// timeline (currently just the hero, src/sections/Header.tsx) wait on this
// too when a preloader is actually showing, so they start as the curtain
// begins clearing instead of racing it.
export const PRELOADER_EXIT_EVENT = "preloader:exiting";

// Resolves immediately if no preloader is showing on this load, or once
// Preloader.tsx fires PRELOADER_EXIT_EVENT if one is. Call from inside an
// effect, never at module scope — it touches `document`/`window`, which
// don't exist during prerendering (this repo builds with `ssr:false` +
// prerender, so route modules also execute once in Node at build time).
export function waitForPreloaderExit(): Promise<void> {
  return new Promise((resolve) => {
    if (!isPreloaderPending()) {
      resolve();
      return;
    }
    window.addEventListener(PRELOADER_EXIT_EVENT, () => resolve(), { once: true });
  });
}
