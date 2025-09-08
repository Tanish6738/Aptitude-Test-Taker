"use client";

import React from 'react';
import Link from 'next/link';
import StatsCard from '@/components/StatsCard';
import { analytics } from '@/mock/analytics';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-8">
      <section className="max-w-5xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Crack Your Placement Aptitude</h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Practice curated aptitude questions, take realistic mock tests, and track performance with actionable analytics.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tests" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 font-medium">Take a Mock Test</Link>
          <Link href="/practice-sets" className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-6 py-3 font-medium">Browse Practice Sets</Link>
        </div>
      </section>
      <section className="max-w-5xl mx-auto grid md:grid-cols-4 gap-4 mb-16">
        <StatsCard label="Attempts" value={analytics.summary.totalAttempts} />
        <StatsCard label="Avg Score" value={analytics.summary.avgScore} />
        <StatsCard label="Best Score" value={analytics.summary.bestScore} />
        <StatsCard label="Topics" value={analytics.summary.topics} />
      </section>
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 pb-20">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Practice Sets</h3>
          <p className="text-gray-400 text-sm">Target specific topics with focused sets to strengthen weak areas.</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Timed Mock Tests</h3>
          <p className="text-gray-400 text-sm">Simulate real exam conditions and build confidence.</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
          <p className="text-gray-400 text-sm">Track progress, accuracy, and speed across attempts.</p>
        </div>
      </section>
    </main>
  );
}
