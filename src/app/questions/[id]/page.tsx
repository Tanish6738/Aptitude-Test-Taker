"use client";
import React from 'react';
import { questions } from '@/mock/questions';
import QuestionCard from '@/components/QuestionCard';

type Params = { id: string };

export default function QuestionDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = React.use(params);
  const q = questions.find(q => q.id === id);
  if (!q) return <div className="min-h-screen bg-gray-900 text-gray-50 p-6">Question not found.</div>;
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Question Detail</h1>
      <QuestionCard question={q.question} options={q.options} />
      <div className="text-sm text-gray-400">Correct Answer: {q.answer}</div>
    </main>
  );
}