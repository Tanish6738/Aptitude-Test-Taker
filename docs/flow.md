Perfect 🚀 Let’s map everything into your **existing Next.js project structure** so you know **file-by-file what to implement**.

---

# **File-by-File Implementation Plan**

---

## **1. Authentication (Clerk)**

* **`src/middleware.ts`**

  * Protect routes like `/dashboard`, `/tests`, `/analytics`.
  * Redirect unauthenticated users to `/auth/signIn`.

* **`src/app/auth/signIn/page.tsx` & `src/app/auth/signUp/page.tsx`**

  * Use Clerk’s `SignIn` and `SignUp` components.
  * Customize UI with your existing `FormInput.tsx` and `Button.tsx`.

* **`src/app/auth/user/page.tsx`**

  * Show user profile (via Clerk’s `UserProfile` component).

---

## **2. Dashboard**

* **`src/app/dashboard/page.tsx`**

  * Fetch user test history from MongoDB (`Attempt` collection).
  * Display:

    * Quick stats (use `StatsCard.tsx`).
    * Recent tests (`TestCard.tsx`).
    * “Start New Test” button → `/tests/create`.

* **`src/Components/StatsCard.tsx`**

  * Show performance metrics (avg score, tests taken, accuracy).

* **`src/Components/PracticeSetCard.tsx`**

  * List practice sets or pre-defined tests.

---

## **3. Questions Management**

* **`src/app/questions/create/page.tsx`**

  * Form to add a single question (admin only).

* **`src/app/questions/upload/page.tsx`**

  * Bulk upload questions via CSV/JSON.

* **`src/app/questions/page.tsx`**

  * List all questions with filters (topic, difficulty).

* **Database Schema (new)** → `src/lib/models/Question.ts`

  ```ts
  const QuestionSchema = new Schema({
    text: String,
    options: [String],
    correctAnswer: String,
    topic: String,
    difficulty: String,
    createdAt: { type: Date, default: Date.now }
  });
  export default mongoose.models.Question || mongoose.model("Question", QuestionSchema);
  ```

---

## **4. Test Creation & Generation**

* **`src/app/tests/create/page.tsx`**

  * Let user select:

    * Topics (checkbox list).
    * Number of questions.
    * Time limit.
  * Store config in MongoDB (`Test` schema).

* **`src/lib/models/Test.ts`**

  ```ts
  const TestSchema = new Schema({
    userId: String,
    topics: [String],
    numberOfQuestions: Number,
    timeLimit: Number,
    createdAt: { type: Date, default: Date.now }
  });
  export default mongoose.models.Test || mongoose.model("Test", TestSchema);
  ```

---

## **5. Test-Taking Interface**

* **`src/app/tests/[id]/start/page.tsx`**

  * Fetch questions from DB based on test config.
  * Display using `QuestionCard.tsx`.
  * Include navigation buttons (Next, Previous).
  * Add a countdown timer.
  * On submit → redirect to `/tests/[id]/result`.

* **`src/Components/QuestionCard.tsx`**

  * Show question text + multiple-choice answers.
  * Highlight selected option.

---

## **6. Result Calculation & Display**

* **`src/app/tests/[id]/result/page.tsx`**

  * Compare submitted answers with correct answers.
  * Calculate:

    * Score
    * Correct vs incorrect answers
    * Accuracy %
  * Display results:

    * Summary (use `StatsCard.tsx`).
    * Detailed breakdown (each question, correct/incorrect).

* **`src/lib/models/Attempt.ts`**

  ```ts
  const AttemptSchema = new Schema({
    userId: String,
    testId: String,
    answers: [String],
    score: Number,
    correctCount: Number,
    incorrectCount: Number,
    createdAt: { type: Date, default: Date.now }
  });
  export default mongoose.models.Attempt || mongoose.model("Attempt", AttemptSchema);
  ```

---

## **7. Test History & Analytics**

* **`src/app/analytics/page.tsx`**

  * Show overall progress charts (`AnalyticsChart.tsx`).
  * Graph: scores over time.

* **`src/app/analytics/topics/page.tsx`**

  * Topic-wise accuracy (Quant, Verbal, Logical, GK).

* **`src/app/analytics/attempts/[id]/page.tsx`**

  * Show full attempt details (like reviewing a past test).

---

## **8. Pre-Defined Tests (Placement Sets)**

* **`src/app/tests/page.tsx`**

  * List curated placement-focused tests (`TestCard.tsx`).
  * Allow user to attempt them directly.

* **`src/mock/tests.ts`** (for now, before DB)

  * Store sample placement tests (aptitude + reasoning).

---

## **9. Shared Components**

* **`src/Components/Navbar.tsx`**

  * Add links: Dashboard | Tests | Analytics | Profile.

* **`src/Components/SideBar.tsx`**

  * Quick navigation inside Dashboard/Analytics.

* **`src/Components/Footer.tsx`**

  * Branding + copyright.

---

## **10. Utilities**

* **`src/lib/dbConnect.ts`** (new)

  * Handle MongoDB connection.

* **`src/lib/helpers.ts`** (new)

  * Helper functions:

    * Shuffle questions.
    * Calculate results.
    * Format analytics data.

---

✅ This plan ties every **feature → file → database schema** so you don’t lose track.
It keeps your project clean and scalable while reusing your existing components.

---

Do you want me to also prepare a **MongoDB schema diagram (ERD)** so you can visualize how `Users`, `Questions`, `Tests`, and `Attempts` connect?
