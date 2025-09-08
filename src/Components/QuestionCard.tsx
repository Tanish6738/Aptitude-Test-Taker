import React from 'react';

type Option = { label: string; value: string };
type QuestionCardProps = {
  question?: string;
  options?: Option[];
  onSelect?: (value: string) => void;
};

const mock = {
  question: 'What is the capital of France?',
  options: [
    { label: 'Berlin', value: 'berlin' },
    { label: 'Madrid', value: 'madrid' },
    { label: 'Paris', value: 'paris' },
    { label: 'Rome', value: 'rome' },
  ],
};

export default function QuestionCard({ question, options, onSelect }: QuestionCardProps) {
  const opts = options || mock.options;
  return (
    <div className="bg-gray-800 shadow-md rounded-2xl p-4 mb-4">
      <div className="text-gray-50 text-lg font-semibold mb-2">{question || mock.question}</div>
      <div className="flex flex-col gap-2">
        {opts.map(opt => (
          <button
            key={opt.value}
            className="bg-gray-700 hover:bg-blue-700 text-gray-50 rounded-md px-3 py-2 text-left"
            onClick={() => {
              onSelect?.(opt.value);
              console.log('Option selected:', opt.value);
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
