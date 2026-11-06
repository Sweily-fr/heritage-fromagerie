"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Amplification de la molette selon la vitesse du geste (en px/ms) :
// aucune jusqu'à SLOW_SPEED, puis croissante jusqu'à MAX_BOOST à partir de FAST_SPEED.
const SLOW_SPEED = 0.8;
const FAST_SPEED = 4;
const MAX_BOOST = 2.5;
const GESTURE_PAUSE_MS = 200;

function createWheelBoost() {
  let lastEventTime = 0;
  let speed = 0;

  return (data) => {
    if (data.event.type !== "wheel") return true;

    const now = performance.now();
    const elapsed = now - lastEventTime;
    lastEventTime = now;
    if (elapsed > GESTURE_PAUSE_MS) speed = 0;

    // Moyenne glissante, pour ne pas réagir à un seul évènement isolé
    speed = speed * 0.7 + (Math.abs(data.deltaY) / Math.max(elapsed, 8)) * 0.3;

    const progress = Math.min(Math.max((speed - SLOW_SPEED) / (FAST_SPEED - SLOW_SPEED), 0), 1);
    data.deltaY *= 1 + progress * (MAX_BOOST - 1);
    return true;
  };
}

export default function SmoothSnap() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      // Le défilement rattrape une part de la distance restante à chaque image, au lieu de
      // durer un temps fixe : petit geste = arrêt rapide, grand geste = défilement rapide.
      lerp: 0.22,
      smoothWheel: true,
      touchMultiplier: 2,
      virtualScroll: createWheelBoost(),
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
