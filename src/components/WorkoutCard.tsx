import Link from "next/link";
import { Workout } from "@/types";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="card bg-base-200 border border-base-300 hover:-translate-y-1 hover:border-primary/50 transition-all duration-200 group"
    >
      <figure className="relative h-40 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </figure>

      <div className="card-body p-4">
        <div className="flex gap-1.5 mb-1">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-primary text-primary-content uppercase font-bold text-[10px] tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="uppercase font-semibold text-sm">{workout.name}</h3>
        <p className="text-xs text-gray-500 -mt-2">{workout.equipment}</p>

        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1 border border-base-300 rounded-md px-3 py-2">
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c1 3-2 4-2 7a3 3 0 106 0c0-1-1-2-1-3 2 1 4 4 4 7a7 7 0 11-14 0c0-4 3-7 7-11z" />
            </svg>
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
            </svg>
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}