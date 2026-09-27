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
        <div className="absolute top-2 left-2 flex gap-1.5">
          {workout.muscleGroups.map((tag) => (
            <span key={tag} className="badge badge-primary badge-sm uppercase font-bold text-[10px]">
              {tag}
            </span>
          ))}
        </div>
      </figure>

      <div className="card-body p-4">
        <h3 className="uppercase font-semibold text-sm">{workout.name}</h3>
        <p className="text-xs text-gray-500 -mt-2">{workout.equipment}</p>
        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}