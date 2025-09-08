import React from 'react';

interface StatsCardProps {
  label?: string;
  value?: number | string;
  icon?: React.ReactNode;
}

const mock = {
  label: 'Total Attempts',
  value: 42,
  icon: <span role="img" aria-label="attempts">📊</span>,
};

export default function StatsCard({ label, value, icon }: StatsCardProps) {
  return (
    <div className="bg-gray-800 shadow-md rounded-2xl p-4 flex items-center gap-4">
      <div className="text-3xl">{icon || mock.icon}</div>
      <div>
        <div className="text-gray-50 text-lg font-semibold">{value ?? mock.value}</div>
        <div className="text-gray-400 text-sm">{label || mock.label}</div>
      </div>
    </div>
  );
}
