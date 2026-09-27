"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";

export default function MyPlanPage() {
  const { plan, saved, metrics, removeFromPlan, removeFromSaved, markAsDone, isHydrated } = usePlan();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const planTabClass = activeTab === "plan" ? "tab tab-active" : "tab";
  const savedTabClass = activeTab === "saved" ? "tab tab-active" : "tab";

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="uppercase font-bold text-3xl mb-2">My Plan</h1>
      <p className="text-gray-400 mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="grid grid-cols-3 gap-4 bg-base-200 border border-base-300 rounded-xl p-6 mb-8">
        <div>
          <p className="text-xs text-gray-500 uppercase mb-1">Exercises</p>
          <p className="text-2xl font-bold text-primary">{metrics.exercises}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase mb-1">Minutes</p>
          <p className="text-2xl font-bold">{metrics.minutes}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase mb-1">Calories</p>
          <p className="text-2xl font-bold">{metrics.calories}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="tabs tabs-boxed bg-base-200">
          <a className={planTabClass} onClick={() => setActiveTab("plan")}>
            Today is Plan
          </a>
          <a className={savedTabClass} onClick={() => setActiveTab("saved")}>
            Saved
          </a>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered select-sm bg-base-200"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {!isHydrated ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p>Loading workouts</p>
        </div>
      ) : sortedList.length === 0 ? (
        <div className="text-center border border-dashed border-base-300 rounded-xl py-16">
          <h3 className="uppercase font-bold text-lg mb-2">Nothing Here Yet</h3>
          <p className="text-gray-500 text-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href="/" className="btn btn-primary">
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedList.map((item) => {
            const showMarkDone = activeTab === "plan" && !("isDone" in item && item.isDone);
            return (
              <div key={item.id} className="flex items-center gap-4 bg-base-200 border border-base-300 rounded-xl p-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h4 className="uppercase font-semibold text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500 mb-1">{item.equipment}</p>
                  <div className="flex gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                      {item.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2c1 3-2 4-2 7a3 3 0 106 0c0-1-1-2-1-3 2 1 4 4 4 7a7 7 0 11-14 0c0-4 3-7 7-11z" />
                      </svg>
                      {item.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                      </svg>
                      {item.rating}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={"/workout/" + item.id} className="btn btn-outline btn-xs">
                    View Details
                  </Link>
                  {showMarkDone && (
                    <button onClick={() => markAsDone(item.id)} className="btn btn-primary btn-xs gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Mark as Done
                    </button>
                  )}
                  <button
                    onClick={() => (activeTab === "plan" ? removeFromPlan(item.id) : removeFromSaved(item.id))}
                    className="btn btn-ghost btn-xs text-gray-500 hover:text-red-400"
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}