import type { FC } from "react";

export const QuestionsListSkeleton: FC = () => {
  return (
    <div className="w-full max-w-[804px] bg-white p-5 shadow-md rounded-xl">
      {/* Заголовок "Questions" */}
      <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-6 pb-4 border-b border-[#e0e0e0]" />

      {/* Список вопросов (5–7 карточек) */}
      <ul className="space-y-3">
        {[...Array(6)].map((_, i) => (
          <li key={i} className="p-4 border border-gray-100 rounded-lg">
            <div className="flex items-start gap-3">
              {/* Аватар */}
              <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse flex-shrink-0" />

              <div className="flex-1 space-y-2">
                {/* Заголовок вопроса */}
                <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />

                {/* Подзаголовок / мета */}
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />

                {/* Теги */}
                <div className="flex gap-2 mt-2">
                  <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Рейтинг / сложность */}
              <div className="flex gap-1">
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Пагинация */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <div className="h-9 w-9 bg-gray-200 rounded animate-pulse" />
        <div className="h-9 w-9 bg-gray-200 rounded animate-pulse" />
        <div className="h-9 w-16 bg-gray-200 rounded animate-pulse" />
        <div className="h-9 w-9 bg-gray-200 rounded animate-pulse" />
        <div className="h-9 w-9 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
};
