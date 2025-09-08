import React from 'react';
import { analytics } from '@/mock/analytics';

export default function TopicsAnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Topic Performance</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {analytics.topics.map(t => {
          const pct = Math.round((t.correct / t.total) * 100);
          return (
            <div key={t.label} className="bg-gray-800 rounded-2xl p-4 shadow-md">
              <div className="text-lg font-semibold mb-1">{t.label}</div>
              <div className="text-gray-400 text-sm mb-2">{t.correct} / {t.total} correct</div>
              <div className="w-full bg-gray-700 rounded h-2 overflow-hidden">
                <div className="bg-blue-600 h-full" style={{ width: pct + '%' }} />
              </div>
              <div className="text-right text-xs text-gray-400 mt-1">{pct}%</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}