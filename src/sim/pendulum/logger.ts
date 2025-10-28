import { create } from "zustand";
import { totalEnergy, estimatePeriodFromPeaks } from "./analysis";
import type { Sample } from "./analysis";

/**
 * Store de registro de datos de simulación del péndulo.
 * Guarda muestras en tiempo real, calcula energía total y estima el período.
 */
type LoggerStore = {
  enabled: boolean;
  maxSamples: number;
  samples: Sample[];
  period: number | null;
  clear: () => void;
  setEnabled: (on: boolean) => void;
  push: (s: Omit<Sample, "energy"> & { m: number; g: number; L: number }) => void;
};

export const usePendulumLogger = create<LoggerStore>((set, get) => ({
  enabled: true,
  maxSamples: 2000,
  samples: [],
  period: null,

  // Limpia el registro
  clear: () => set({ samples: [], period: null }),

  // Activa o desactiva el registro
  setEnabled: (on) => set({ enabled: on }),

  /**
   * Registra una nueva muestra en la simulación.
   * Calcula energía, guarda datos y actualiza el período estimado.
   */
  push: ({ t, theta, omega, m, g, L }) => {
    if (!get().enabled) return;

    const energy = totalEnergy(m, g, L, theta, omega);
    const next: Sample = { t, theta, omega, energy };

    // Actualiza muestras limitadas por maxSamples
    const arr = [...get().samples, next];
    const max = get().maxSamples;
    if (arr.length > max) arr.splice(0, arr.length - max);

    // Recalcula el período con las últimas muestras
    const lastWindow = arr.slice(-400);
    const period = estimatePeriodFromPeaks(lastWindow) ?? get().period;

    set({ samples: arr, period });
  },
}));
