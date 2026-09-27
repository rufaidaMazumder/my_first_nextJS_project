#FitLog
FitLog is a workout planning website built with Next.js. It allows users to browse different workouts, check workout details, and create their own daily workout plan.

Users can view information such as equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions. They can add workouts to Today’s Plan or save them for later. The My Plan page also shows the total exercises, workout time, and calories, and users can sort their workouts based on duration, calories, or rating. The plan and saved workouts are stored in localStorage, so they stay available even after refreshing the page.



## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS + DaisyUI
- Context API
- react-hot-toast

## Features

1. All 12 workouts are fetched from a live API and shown in a grid on the home page
2. Each workout has its own details page showing equipment, sets, reps, and instructions
3. Users can add a workout to Today's Plan (max 5 at a time) or save it for later
4. The navbar badges and My Plan page update automatically whenever the plan or saved list changes
5. My Plan workouts can be sorted by duration, calories, or rating
6. Workouts can be marked as done or removed from the plan
7. Plan and saved data stay saved in localStorage even after refreshing the page
8. The whole site is responsive and works on mobile, tablet, and desktop
9. A custom 404 page shows up for any invalid route

## Live Link

fit-log-zeta-ten.vercel.app

## GitHub Repository

https://github.com/rufaidaMazumder/my_first_nextJS_project