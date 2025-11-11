import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section className=" flex items-center justify-center  to-purple-50 py-16">
      <div className="flex flex-col items-center text-center space-y-6 animate-fadeIn">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 drop-shadow-sm">
          Welcome
        </h1>

        <p className="text-lg text-neutral-600 max-w-lg">
          Discover, learn, and challenge yourself with our collection of
          questions.
        </p>

        <Link
          to="/questions"
          className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Go to Questions →
        </Link>
      </div>
    </section>
  );
}
