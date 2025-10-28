export type Sample = { t: number; theta: number; omega: number; energy: number };

export function totalEnergy(m: number, g: number, L: number, theta: number, omega: number) {
  const v = L * omega; // velocidad tangencial
  const K = 0.5 * m * v * v;
  const h = L * (1 - Math.cos(theta));
  const U = m * g * h;
  return K + U;
}

/**
 * Estima período usando detección de picos en θ.
 */
export function estimatePeriodFromPeaks(samples: Sample[], minProminence = 0.005) {
  if (samples.length < 5) return null;
  const peaks: number[] = [];
  for (let i = 1; i < samples.length - 1; i++) {
    const prev = samples[i - 1].theta;
    const cur = samples[i].theta;
    const next = samples[i + 1].theta;
    if (cur > prev && cur > next && Math.abs(cur) > minProminence) {
      peaks.push(samples[i].t);
    }
  }
  if (peaks.length < 2) return null;
  let sum = 0;
  for (let i = 1; i < peaks.length; i++) sum += peaks[i] - peaks[i - 1];
  return sum / (peaks.length - 1);
}
