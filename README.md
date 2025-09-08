# 📘 Placement Aptitude Test Platform

A **Next.js + MongoDB + Clerk + AI** platform for students to prepare for **placements** by taking aptitude tests. Users can:

* Take self‑hosted aptitude tests (DB + AI‑generated questions).
* Create **practice sets**.
* **Upload custom questions** (CSV/Excel).
* Get **AI‑generated questions** in the same style/theme.
* View **analytics & performance breakdowns**.

---

## 🎯 Objective

To build a scalable aptitude preparation platform where:

* Users have **personalized practice sets**.
* AI can **learn question patterns** and generate new ones.
* Tests can simulate **real placement exams** with timing & scoring.
* Analytics provide insights into **weak areas and progress**.

---

## 🏗️ Tech Stack

* **Next.js (App Router, TS)**
* **MongoDB + Mongoose**
* **Clerk** (authentication)
* **OpenAI** (AI generation + embeddings)
* **Tailwind + shadcn/ui** (UI components)

---

## 🗄️ Database Schema

### User

```ts
User {
  clerkId: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  preferences: {
    topics: string[];
    difficultyTarget: 'easy' | 'medium' | 'hard';
  };
}
```

### Question

```ts
Question {
  ownerId: string;
  visibility: 'private' | 'public';
  source: 'manual' | 'uploaded' | 'ai';
  stem: string;
  options: { key: string; text: string }[];
  answerKey: string;
  explanation: string;
  tags: string[];
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimitSec: number;
  embedding?: number[];
}
```

### PracticeSet

```ts
PracticeSet {
  ownerId: string;
  title: string;
  description: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  questionIds: ObjectId[];
  centroid?: number[];
}
```

### Test

```ts
Test {
  ownerId: string;
  title: string;
  mode: 'adaptive' | 'fixed';
  durationMin: number;
  questionIds: ObjectId[];
  randomize: boolean;
  negativeMarking: number;
}
```

### Attempt

```ts
Attempt {
  testId: ObjectId;
  userId: string;
  startedAt: Date;
  submittedAt: Date;
  responses: {
    questionId: ObjectId;
    selected: string;
    isCorrect: boolean;
    timeTakenSec: number;
  }[];
  score: number;
  breakdown: {
    accuracy: number;
    topicStats: { topic: string; correct: number; total: number }[];
  };
}
```

---

## 🔗 API Endpoints

### Auth & User

* `GET /api/users/me` → Get logged-in user info.
* `PATCH /api/users/me` → Update preferences.

### Questions

* `POST /api/questions` → Create a question.
* `GET /api/questions` → Fetch (all/public/user’s own).
* `GET /api/questions/:id` → Get one question.
* `PATCH /api/questions/:id` → Update a question.
* `DELETE /api/questions/:id` → Delete a question.
* `POST /api/questions/upload` → Bulk upload via CSV.
* `POST /api/questions/:id/embed` → Generate embedding.

### Practice Sets

* `POST /api/practice-sets` → Create a set.
* `GET /api/practice-sets` → List sets.
* `GET /api/practice-sets/:id` → Get set details.
* `PATCH /api/practice-sets/:id` → Edit set.
* `DELETE /api/practice-sets/:id` → Delete set.
* `POST /api/practice-sets/:id/compute-centroid` → Compute embedding centroid.
* `POST /api/generate/from-set/:id` → AI generate questions.

### Tests

* `POST /api/tests` → Create a test.
* `GET /api/tests` → List tests.
* `GET /api/tests/:id` → Get details.
* `POST /api/tests/:id/start` → Start test session.
* `POST /api/tests/:id/submit` → Submit test attempt.

### Attempts & Analytics

* `GET /api/attempts` → List user attempts.
* `GET /api/attempts/:id` → Attempt details.
* `GET /api/analytics/summary` → Performance dashboard.
* `GET /api/analytics/topic/:topic` → Topic-specific stats.

### AI Utilities

* `POST /api/ai/generate-question` → Generate single question.
* `POST /api/ai/recommend-questions` → Recommend based on weak topics.
* `POST /api/ai/expand-set/:id` → Add AI questions to a practice set.

---

## ⚙️ Working

1. **Users authenticate** with Clerk.
2. **Questions** can be manually added, uploaded in bulk, or AI-generated.
3. **Practice sets** allow grouping of questions.
4. **Tests** can be created (fixed/adaptive).
5. Users **start tests** → responses tracked → **submit attempts**.
6. **Scoring & analytics** auto-computed (accuracy, weak topics, timing).
7. AI suggests **new questions** or **expands sets** using embeddings.

---

## 🚀 Roadmap

* [ ] MVP → Questions CRUD, Test-taking, Clerk auth.
* [ ] Phase 2 → Practice sets, CSV upload, AI question generation.
* [ ] Phase 3 → Analytics dashboard, weak-topic recommendations.
* [ ] Phase 4 → Adaptive testing, leaderboards, org support.

---

## 📌 Getting Started

```bash
# Clone repo
npx create-next-app placements-ai --ts
cd placements-ai

# Install dependencies
npm install mongoose zod openai @clerk/nextjs uploadthing @uploadthing/react

# Setup .env
MONGODB_URI=...
OPENAI_API_KEY=...
CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

# Run app
npm run dev
```

---

💡 This README gives a full blueprint: schemas, endpoints, objectives, and working. You can now implement step by step.
