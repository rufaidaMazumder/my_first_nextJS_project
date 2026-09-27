"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const linkClass = (path: string) =>
    pathname === path ? "text-primary font-semibold" : "text-gray-400 hover:text-white";

  return (
    <div className="navbar bg-base-100/95 backdrop-blur border-b border-base-300 sticky top-0 z-50 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="navbar-start">
        <Link href="/" className="text-lg font-bold tracking-wide">
          FITLOG
        </Link>
      </div>

      <div className="navbar-center hidden sm:flex gap-8 text-sm">
        <Link href="/" className={linkClass("/")}>Workout</Link>
        <Link href="/my-plan" className={linkClass("/my-plan")}>My Plan</Link>
      </div>

      <div className="navbar-end gap-2">
        <Link href="/my-plan" className="badge badge-primary gap-1.5 py-3 px-3">
          Plan <span className="bg-black/20 rounded-full px-1.5">{plan.length}</span>
        </Link>
        <Link href="/my-plan" className="badge badge-outline gap-1.5 py-3 px-3">
          Saved <span>{saved.length}</span>
        </Link>
      </div>
    </div>
  );
}