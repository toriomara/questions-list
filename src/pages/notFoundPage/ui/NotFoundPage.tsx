import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center text-center pt-16">
      <div className="max-w-md px-4">
        <h1 className="text-9xl font-bold text-purple-600 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Страница не найдена</h2>
        <p className="text-gray-600 mt-2 mb-6">
          Ой, кажется, вы забрели не туда. Давайте вернёмся на главную!
        </p>
        <Link 
          to="/" 
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-md"
        >
          На главную
        </Link>
      </div>
    </div>
  );
};