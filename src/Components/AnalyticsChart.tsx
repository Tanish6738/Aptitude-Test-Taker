import React from 'react';

// Mock data for bar and pie chart
const mockBar = [
  { label: 'Quant', value: 18 },
  { label: 'Logical', value: 12 },
  { label: 'Verbal', value: 10 },
];
const mockPie = [
  { label: 'Correct', value: 30 },
  { label: 'Incorrect', value: 10 },
];

type AnalyticsChartProps = {
  type?: 'bar' | 'pie';
  data?: { label: string; value: number }[];
};

export default function AnalyticsChart({ type = 'bar', data }: AnalyticsChartProps) {
  const chartData = data || (type === 'bar' ? mockBar : mockPie);
  return (
    <div className="bg-gray-800 shadow-md rounded-2xl p-4">
      <div className="text-gray-50 font-semibold mb-2">{type === 'bar' ? 'Topic-wise Performance' : 'Result Breakdown'}</div>
      <div className="flex gap-2 items-end h-32">
        {type === 'bar' && chartData.map(d => (
          <div key={d.label} className="flex flex-col items-center justify-end h-full">
            <div
              className="bg-blue-600 rounded-t-md"
              style={{ height: `${d.value * 4}px`, width: '32px' }}
              title={d.label + ': ' + d.value}
            ></div>
            <div className="text-xs text-gray-300 mt-1">{d.label}</div>
          </div>
        ))}
        {type === 'pie' && (
          <div className="relative w-24 h-24">
            {/* Simple pie chart using conic-gradient */}
            <div
              className="w-24 h-24 rounded-full"
              style={{
                background: `conic-gradient(#2563eb 0% ${(chartData[0].value / (chartData[0].value + chartData[1].value)) * 100}%, #ef4444 0% 100%)`,
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-gray-50 text-sm font-bold">
              {chartData[0].value + chartData[1].value}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
