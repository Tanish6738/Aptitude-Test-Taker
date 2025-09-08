"use client";
import React from 'react';
import { practiceSets } from '@/mock/practiceSets';
import PracticeSetCard from '@/components/PracticeSetCard';
import Link from 'next/link';

export default function PracticeSetsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Practice Sets</h1>
        <Link href="/practice-sets/create" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2">Create</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {practiceSets.map(ps => (
          <Link key={ps.id} href={`/practice-sets/${ps.id}`}>
            <PracticeSetCard title={ps.title} questionCount={ps.questionCount} />
          </Link>
        ))}
      </div>
    </main>
  );
}