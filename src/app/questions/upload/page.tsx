"use client";
import React from 'react';
import Button from '@/components/Button';

export default function UploadQuestionsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload Questions (CSV)</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('Upload triggered');
        }}
        className="bg-gray-800 rounded-2xl p-6 shadow-md flex flex-col gap-4"
      >
        <input
          type="file"
          accept=".csv"
          required
          className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-gray-50"
          onChange={() => console.log('File selected')}
        />
        <Button type="submit">Upload</Button>
      </form>
    </main>
  );
}