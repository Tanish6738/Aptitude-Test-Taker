import React from 'react';

type PracticeSetCardProps = {
  title?: string;
  questionCount?: number;
  onStart?: () => void;
};

const mock = {
  title: 'Aptitude Basics',
  questionCount: 20,
};

export default function PracticeSetCard({ title, questionCount, onStart }: PracticeSetCardProps) {
  return (
    <div className="bg-gray-800 shadow-md rounded-2xl p-4 flex flex-col gap-2">
      <div className="text-gray-50 text-lg font-semibold">{title || mock.title}</div>
      <div className="text-gray-400 text-sm">{questionCount ?? mock.questionCount} Questions</div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 mt-2"
        onClick={() => {
          onStart?.();
          console.log('Start Practice Set clicked');
        }}
      >
        Start Practice
      </button>
    </div>
  );
}
