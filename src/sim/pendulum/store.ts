import { create } from "zustand";
import { rk4 } from "../core/integrators";
import { pendulumDerivs } from "./model";
import type { PendulumParams, PendulumState } from "./model";
import { usePendulumLogger } from "./logger";

type PendulumSimStore = {
  running: boolean;
  params: PendulumParams;
  init: { theta0: number; omega0: number };
  state: PendulumState;
  dt: number;
  toggle: () => void;
  reset: () => void;
  setParam: <K extends keyof PendulumParams>(key: K, value: PendulumParams[K]) => void;
  setInitTheta: (deg: number) => void;
  step: (delta: number) => void;
  presets: {
    earth: () => void;
    moon: () => void;
    jupiter: () => void;
  };
};

export const usePendulumSim = create<PendulumSimStore>((set, get) => ({
  running: false,
  params: { g: 9.81, L: 1, m: 1, damping: 0.01 },
  init: { theta0: Math.PI / 12, omega0: 0 },
  state: { theta: Math.PI / 12, omega: 0, t: 0 },
  dt: 1 / 60,

  toggle: () => set(s => ({ running: !s.running })),

  reset: () => {
    usePendulumLogger.getState().clear();
    set(s => ({
      running: false,
      state: { theta: s.init.theta0, omega: s.init.omega0, t: 0 }
    }));
  },

  setParam: (key, value) => set(s => ({
    params: { ...s.params, [key]: value }
  })),

  setInitTheta: (deg) => set(s => {
    const rad = (deg * Math.PI) / 180;
    return {
      init: { ...s.init, theta0: rad },
      state: s.running ? s.state : { ...s.state, theta: rad, omega: 0 }
    };
  }),

  step: (delta) => {
    const { running, state, params, dt } = get();
    const logger = usePendulumLogger.getState();
    const capped = Math.min(delta, 0.03);

    if (!running) {
      // incluso en pausa, registra un último punto si no hay muestras
      if (logger.samples.length === 0) {
        logger.push({ t: state.t, theta: state.theta, omega: state.omega, m: params.m, g: params.g, L: params.L });
      }
      return;
    }

    let t = state.t;
    let y = [state.theta, state.omega];

    let acc = 0;
    while (acc < capped) {
      const h = Math.min(dt, capped - acc);
      const { y: newY, t: newT } = rk4(y, t, h, pendulumDerivs, params);
      y = newY;
      t = newT;
      acc += h;

      // muestreo uniforme a paso dt
      logger.push({ t: newT, theta: newY[0], omega: newY[1], m: params.m, g: params.g, L: params.L });
    }

    set({ state: { theta: y[0], omega: y[1], t } });
  },

  presets: {
    earth: () => set(s => ({ params: { ...s.params, g: 9.81 } })),
    moon: () => set(s => ({ params: { ...s.params, g: 1.62 } })),
    jupiter: () => set(s => ({ params: { ...s.params, g: 24.79 } })),
  },
}));
