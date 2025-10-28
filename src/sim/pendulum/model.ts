import type { DerivFunc } from "../core/integrators";

export type PendulumState = {
  theta: number;  // ángulo (rad)
  omega: number;  // velocidad angular (rad/s)
  t: number;      // tiempo (s)
};

export type PendulumParams = {
  g: number;       // gravedad (m/s^2)
  L: number;       // longitud (m)
  m: number;       // masa (kg) — informativa por ahora
  damping: number; // amortiguamiento
};

// y' = f(t, y) para el péndulo simple; y = [theta, omega]
export const pendulumDerivs: DerivFunc = (_t, y, params: PendulumParams) => {
  const [theta, omega] = y;
  const { g, L, damping } = params;
  const Ls = Math.max(L, 0.0001);
  const alpha = -(g / Ls) * Math.sin(theta) - damping * omega;
  return [omega, alpha];
};
