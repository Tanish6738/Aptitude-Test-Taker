"use client";

import React from 'react';
import AnalyticsChart from '@/components/AnalyticsChart';
import { analytics } from '@/mock/analytics';
import StatsCard from '@/components/StatsCard';

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics Overview</h1>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <StatsCard label="Attempts" value={analytics.summary.totalAttempts} />
        <StatsCard label="Avg Score" value={analytics.summary.avgScore} />
        <StatsCard label="Best Score" value={analytics.summary.bestScore} />
        <StatsCard label="Topics" value={analytics.summary.topics} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <AnalyticsChart type="bar" />
        <AnalyticsChart type="pie" />
      </div>
    </main>
  );
}