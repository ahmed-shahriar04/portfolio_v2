"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 30,
      disableMutationObserver: false,
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
