"use client";

import { use, useEffect, useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { getWorkoutById } from "@/utils/api";
import { Workout } from "@/types";

type Params = Promise<{ id: string }>;

export default function WorkoutDetails({ params }: { params: Params }) {
  const { id } = use(params);
  const { plan, addToPlan, addToSaved } = usePlan();
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkout() {
      try {
        const data = await getWorkoutById(id);
        setWorkout(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadWorkout();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="text-center py-24 text-gray-400">Workout not found.</div>
    );
  }

  const isPlanFull = plan.length >= 5;
  const isAlreadyInPlan = plan.some((item) => item.id === workout.id);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid lg:grid-cols-2 gap-10">
      <div className="h-72 lg:h-full rounded-2xl overflow-hidden bg-base-200 border border-base-300">
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="uppercase font-bold text-3xl mb-3">{workout.name}</h1>
        <p className="text-gray-400 mb-4">{workout.description}</p>

        <div className="flex gap-2 mb-6">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-primary text-primary-content uppercase font-bold text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-base-200 border border-base-300 rounded-xl divide-y divide-base-300 mb-8">
          {[
            ["Equipment", workout.equipment],
            ["Difficulty", workout.difficulty],
            ["Sets", workout.sets],
            ["Reps", workout.reps],
            ["Duration", `${workout.duration} min`],
            ["Calories", `${workout.caloriesBurned} kcal`],
            ["Rating", workout.rating],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between px-4 py-2.5 text-sm">
              <span className="text-gray-500 uppercase text-xs tracking-wide">
                {label}
              </span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        <h2 className="uppercase font-bold text-lg mb-3">Instructions</h2>
        <ol className="space-y-2 mb-8 text-sm text-gray-300 list-decimal list-inside">
          {workout.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => addToPlan(workout)}
            disabled={isPlanFull || isAlreadyInPlan}
            className="btn btn-primary gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            {isAlreadyInPlan
              ? "Already in Plan"
              : isPlanFull
              ? "Plan Full"
              : "Add to today's plan"}
          </button>
          <button onClick={() => addToSaved(workout)} className="btn btn-outline gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
            </svg>
            Save for later
          </button>
        </div>
      </div>
    </section>
  );
}