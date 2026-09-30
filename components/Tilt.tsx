"use client";
import { useEffect } from "react";

/*
  Writes two CSS variables on <html>, --tx and --ty, each between -1 and 1.
  CSS decides what moves (see "Tilt" in globals.css). Nothing moves unless <html> has .tilt-on.

  Android / most browsers: deviceorientation just fires. No prompt, no tap.
  iOS 13+: Safari hides the sensor behind DeviceOrientationEvent.requestPermission(),
           which only works inside a tap. So we ask on the first tap anywhere, silently.
  Desktop: no sensor, so the mouse drives it instead.
  Reduced motion: off entirely.
*/

const RANGE = 18; // degrees of tilt from resting position that reaches full effect
const clamp = (v: number) => Math.max(-1, Math.min(1, v));
const wrap = (d: number) => ((d + 540) % 360) - 180; // shortest signed angle difference

type IOSOrientation = typeof DeviceOrientationEvent & { requestPermission?: () => Promise<"granted" | "denied"> };

export default function Tilt() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let target = { x: 0, y: 0 };
    const now = { x: 0, y: 0 };
    let raf = 0;
    let running = false;

    const loop = () => {
      now.x += (target.x - now.x) * 0.12;
      now.y += (target.y - now.y) * 0.12;
      root.style.setProperty("--tx", now.x.toFixed(4));
      root.style.setProperty("--ty", now.y.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      root.classList.add("tilt-on");
      raf = requestAnimationFrame(loop);
    };

    // ——— Device orientation ———
    let base: { b: number; g: number } | null = null;
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return; // browser has the API but no sensor
      let b = e.beta, g = e.gamma;

      // Keep "left/right" meaning left/right when the phone is turned sideways.
      const angle = screen.orientation?.angle ?? (window as unknown as { orientation?: number }).orientation ?? 0;
      if (angle === 90) [b, g] = [-g, b];
      else if (angle === -90 || angle === 270) [b, g] = [g, -b];
      else if (angle === 180) [b, g] = [-b, -g];

      // However they're holding the phone when we start is "neutral" — not flat on a table.
      if (!base) { base = { b, g }; start(); }
      // Let neutral drift slowly, so changing posture (sitting → lying down) re-centres itself.
      base.b += wrap(b - base.b) * 0.01;
      base.g += wrap(g - base.g) * 0.01;

      target = { x: clamp(wrap(g - base.g) / RANGE), y: clamp(wrap(b - base.b) / RANGE) };
    };
    const listenOrientation = () => window.addEventListener("deviceorientation", onOrient);

    // ——— Desktop mouse ———
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      start();
      target = { x: clamp((e.clientX / innerWidth) * 2 - 1), y: clamp((e.clientY / innerHeight) * 2 - 1) };
    };
    const onLeave = () => { target = { x: 0, y: 0 }; };

    // ——— iOS first-tap permission ———
    const DOE = (typeof DeviceOrientationEvent !== "undefined" ? DeviceOrientationEvent : undefined) as IOSOrientation | undefined;
    const ask = () => {
      window.removeEventListener("touchend", ask);
      window.removeEventListener("click", ask);
      DOE!.requestPermission!()
        .then((r) => { if (r === "granted") listenOrientation(); })
        .catch(() => {}); // denied or not over HTTPS: site just stays still
    };

    if (DOE && typeof DOE.requestPermission === "function") {
      // iOS. Must wait for a real tap.
      window.addEventListener("touchend", ask, { passive: true });
      window.addEventListener("click", ask);
    } else if (DOE) {
      // Android and everything else: listen straight away. No tap, nothing shown.
      listenOrientation();
    }

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      window.addEventListener("pointermove", onPointer);
      document.addEventListener("mouseleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("deviceorientation", onOrient);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchend", ask);
      window.removeEventListener("click", ask);
      root.classList.remove("tilt-on");
    };
  }, []);

  return null;
}
