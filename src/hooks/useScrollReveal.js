import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to a ref element.
 * When the element enters the viewport it adds the "revealed" class.
 *
 * @param {object} options
 * @param {number} options.threshold  – 0-1, portion of element visible to trigger (default 0.12)
 * @param {string} options.rootMargin – CSS margin to shrink/grow the viewport box (default "0px 0px -60px 0px")
 * @param {number} options.delay      – extra ms before the CSS transition starts (applied via inline style)
 */
const useScrollReveal = ({ threshold = 0.12, rootMargin = "0px 0px -60px 0px", delay = 0 } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply delay via inline style so every caller can be unique
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  return ref;
};

export default useScrollReveal;
