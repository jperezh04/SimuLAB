export type DerivFunc = (t: number, y: number[], params?: any) => number[];

export function rk4(
  y: number[],
  t: number,
  dt: number,
  f: DerivFunc,
  params?: any
): { y: number[]; t: number } {
  const k1 = f(t, y, params);
  const y2 = y.map((yi, i) => yi + 0.5 * dt * k1[i]);
  const k2 = f(t + 0.5 * dt, y2, params);
  const y3 = y.map((yi, i) => yi + 0.5 * dt * k2[i]);
  const k3 = f(t + 0.5 * dt, y3, params);
  const y4 = y.map((yi, i) => yi + dt * k3[i]);
  const k4 = f(t + dt, y4, params);

  const newY = y.map(
    (yi, i) => yi + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])
  );
  return { y: newY, t: t + dt };
}
