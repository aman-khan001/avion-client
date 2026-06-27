// src/components/OrbitEngine/engine/utils/math.js

export const TAU = Math.PI * 2;

/**
 * Convert degrees to radians
 */
export function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

/**
 * Convert radians to degrees
 */
export function radToDeg(radians) {
  return (radians * 180) / Math.PI;
}

/**
 * Clamp value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation
 */
export function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

/**
 * Normalize value
 */
export function normalize(value, min, max) {
  return (value - min) / (max - min);
}

/**
 * Map value from one range to another
 */
export function map(value, inMin, inMax, outMin, outMax) {
  return (
    outMin +
    ((value - inMin) / (inMax - inMin)) *
      (outMax - outMin)
  );
}

/**
 * Orbit position
 */
export function orbitPosition(angle, radius) {
  return {
    x: Math.sin(angle) * radius,
    z: Math.cos(angle) * radius,
  };
}

/**
 * Smooth damping
 */
export function damp(current, target, lambda, dt) {
  return lerp(current, target, 1 - Math.exp(-lambda * dt));
}

/**
 * Wrap angle
 */
export function wrapAngle(angle) {
  angle %= TAU;

  if (angle < 0) angle += TAU;

  return angle;
}

/**
 * Distance
 */
export function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}