// Shared scroll-reveal motion.
//
// `amount` MUST stay at 0 here. This is applied to whole page sections, which
// are often several viewport-heights tall. `amount` is the fraction of the
// element that must be on screen AT ONCE for whileInView to fire — so any
// meaningful value (0.3 asks for ~1500px of a 5000px section) can never be
// satisfied in a ~900px viewport, and the section stays at opacity:0 forever.
// With amount:0 + a negative bottom margin it fires reliably as the section's
// top edge crosses into view.
//
// Visibility of the animation comes from the stagger variants below (applied
// to individual items inside a section), NOT from delaying this trigger.
export const reveal = {
  initial: { y: 56, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true, amount: 0, margin: "0px 0px -100px 0px" },
};

// Wrap a list container with staggerContainer, and each child with
// motion.div variants={staggerItem.variants} — items cascade in one after
// another instead of the whole block fading as a single flat unit.
//
// `amount` must stay near 0 here: children are hidden until the CONTAINER's
// own whileInView fires, and the container spans the full stacked list
// (often several times the viewport height). A higher amount — like the
// 0.3 used for `reveal` — asks for that fraction of the *entire* list to be
// on-screen at once, which a tall list may never satisfy, leaving every
// child stuck at opacity:0 forever.
export const staggerContainer = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0, margin: "0px 0px -80px 0px" },
  variants: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14, delayChildren: 0.05 },
    },
  },
};

export const staggerItem = {
  variants: {
    hidden: { y: 44, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
};
