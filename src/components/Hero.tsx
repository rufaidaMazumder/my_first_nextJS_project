import Image from "next/image";
import bannerImage from "@/assets/banner.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
      <div className="bg-base-200 border border-base-300 rounded-2xl p-6 sm:p-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge badge-primary badge-outline mb-4 text-xs tracking-widest">
            WORKOUT LIBRARY
          </span>
          <h1 className="uppercase font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Train With Intent. Log Every Set.
          </h1>
          <p className="text-gray-400 max-w-md mb-8">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a href="#library" className="btn btn-primary gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            BROWSE WORKOUTS
          </a>
        </div>

        <div className="relative h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden">
          <Image
            src={bannerImage}
            alt="Workout hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}