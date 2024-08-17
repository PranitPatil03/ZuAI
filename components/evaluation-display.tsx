"use client"

import { Progress } from './ui/progress';

export function EvaluationDisplay() {
  const score = 85;
  const criteria = { A: 90, B: 80, C: 85 };
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <h2>Evaluation Results</h2>
      <div className="flex items-center">
        <Progress value={score} className="w-24 h-24 rounded-full" />
        <span className="ml-4 text-2xl font-bold">{score}%</span>
      </div>
      <div>
        <h3>Criteria Breakdown:</h3>
        <ul>
          {Object.entries(criteria).map(([key, value]) => (
            <li key={key}>
              {key}: {value}%
            </li>
          ))}
        </ul>
      </div>
      <p>Evaluated on: {date}</p>
    </div>
  );
}