import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32 px-4">
      <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8">
        The page you are looking for does not exist or was moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}