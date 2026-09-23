import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Single choke point for GSAP plugin registration.
//
// Routes here are prerendered (react-router.config.ts: ssr:false + prerender),
// which means route modules that import this file also execute once in Node
// at build time. ScrollTrigger/SplitText touch `document` as soon as they're
// registered, so registration must be guarded — every other file imports
// gsap/ScrollTrigger/SplitText from HERE, never directly from "gsap".
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

  // Defensive safety net: anything that finishes loading after its
  // ScrollTrigger was created (web fonts, an above-the-fold image) can leave
  // triggers below it measured against a stale layout. The Projects card
  // images are already guarded against this directly via `aspect-[16/10]`,
  // which sizes the frame from CSS instead of waiting on the image — this
  // just catches whatever that specific fix doesn't.
  window.addEventListener("load", () => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
