"use client";
import React from 'react';
import { practiceSets } from '@/mock/practiceSets';
import { questions } from '@/mock/questions';
import QuestionCard from '@/components/QuestionCard';

type Params = { id: string };

export default function PracticeSetDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = React.use(params);
  const set = practiceSets.find(p => p.id === id);
  if (!set) return <div className="min-h-screen bg-gray-900 text-gray-50 p-6">Practice set not found.</div>;
  const subset = questions.slice(0, 3);
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{set.title}</h1>
      {subset.map(q => (
        <QuestionCard key={q.id} question={q.question} options={q.options} />
      ))}
    </main>
  );
}