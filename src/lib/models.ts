import mongoose, { Schema, Document } from "mongoose";

/* ==============================
   User Schema
============================== */
export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  createdAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

/* ==============================
   Question Schema
============================== */
export interface IQuestion extends Document {
  text: string;
  options: string[];
  correctAnswer: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  createdAt: Date;
}

const QuestionSchema: Schema<IQuestion> = new Schema({
  text: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  topic: { type: String, required: true },
  difficulty: { type: String, enum: ["easy", "medium", "hard"], required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Question =
  mongoose.models.Question || mongoose.model<IQuestion>("Question", QuestionSchema);

/* ==============================
   Test Schema
============================== */
export interface ITest extends Document {
  userId: string;
  topics: string[];
  numberOfQuestions: number;
  timeLimit: number;
  createdAt: Date;
}

const TestSchema: Schema<ITest> = new Schema({
  userId: { type: String, required: true },
  topics: [{ type: String, required: true }],
  numberOfQuestions: { type: Number, required: true },
  timeLimit: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Test =
  mongoose.models.Test || mongoose.model<ITest>("Test", TestSchema);

/* ==============================
   Attempt Schema
============================== */
export interface IAttempt extends Document {
  userId: string;
  testId: string;
  answers: string[];
  score: number;
  correctCount: number;
  incorrectCount: number;
  createdAt: Date;
}

const AttemptSchema: Schema<IAttempt> = new Schema({
  userId: { type: String, required: true },
  testId: { type: String, required: true },
  answers: [{ type: String }],
  score: { type: Number, required: true },
  correctCount: { type: Number, required: true },
  incorrectCount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Attempt =
  mongoose.models.Attempt || mongoose.model<IAttempt>("Attempt", AttemptSchema);
