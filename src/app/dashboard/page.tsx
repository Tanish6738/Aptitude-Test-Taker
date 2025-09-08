"use client";
import React from 'react';
import StatsCard from '@/components/StatsCard';
import { analytics } from '@/mock/analytics';
import { attempts } from '@/mock/attempts';
import { tests } from '@/mock/tests';

export default function DashboardPage() {
  const recent = attempts.slice(0, 5);
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <StatsCard label="Attempts" value={analytics.summary.totalAttempts} />
        <StatsCard label="Avg Score" value={analytics.summary.avgScore} />
        <StatsCard label="Best Score" value={analytics.summary.bestScore} />
        <StatsCard label="Topics" value={analytics.summary.topics} />
      </div>
      <section className="bg-gray-800 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Attempts</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Test</th>
              <th className="py-2">Score</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recent.map(a => {
              const test = tests.find(t => t.id === a.testId);
              return (
                <tr key={a.id} className="border-t border-gray-700">
                  <td className="py-2">{test?.title}</td>
                  <td className="py-2">{a.score}/{a.total}</td>
                  <td className="py-2">{a.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}