import type { FC } from "react";

export const QuestionsPageSkeleton: FC = () => {
  return (
    <div className="container flex gap-5">
      {/* Левая колонка: Список вопросов */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Повторяем 5–7 карточек для имитации списка */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Правая колонка: Фильтры (только lg+) */}
      <div className="hidden lg:block w-full max-w-[392px]">
        <aside className="bg-white p-6 rounded-lg shadow-sm space-y-6">
          {/* Заголовок фильтров */}
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>

          {/* Фильтр: Уровень */}
          <div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-3"></div>
            <div className="flex gap-2 flex-wrap">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-16 bg-gray-200 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Фильтр: Сложность */}
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-3"></div>
            <div className="flex gap-2 flex-wrap">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Фильтр: Навыки */}
          <div>
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-3"></div>
            <div className="flex gap-2 flex-wrap">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-7 w-24 bg-gray-200 rounded-full animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Кнопка "Применить" */}
          <div className="h-11 w-full bg-gray-200 rounded-lg animate-pulse"></div>
        </aside>
      </div>
    </div>
  );
};
