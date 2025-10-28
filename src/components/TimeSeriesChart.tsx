import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Props = {
  data: { t: number; [k: string]: number }[];
  series: { dataKey: string; name: string }[];
  xLabel?: string;
  yLabel?: string;
  height?: number;
};

/**
 * Componente genérico para mostrar gráficas de series temporales
 * usando Recharts (θ, ω, Energía, etc.)
 */
const TimeSeriesChart: React.FC<Props> = ({
  data,
  series,
  height = 260,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow p-4">
      <div className="text-sm text-gray-500 mb-2">
        Gráfica temporal
      </div>
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="t"
              tickFormatter={(v) => v.toFixed(1)}
              label={{
                value: "Tiempo (s)",
                position: "insideBottomRight",
                offset: -5,
              }}
            />
            <YAxis />
            <Tooltip
              formatter={(v: any) =>
                typeof v === "number" ? v.toFixed(4) : v
              }
            />
            <Legend />
            {series.map((s) => (
              <Line
                key={s.dataKey}
                type="monotone"
                dataKey={s.dataKey}
                name={s.name}
                dot={false}
                strokeWidth={2}
                isAnimationActive={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeSeriesChart;
