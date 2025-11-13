import type { FC } from "react";

export const QuestionPageSkeleton: FC = () => {
  return (
    <div className="container grid gap-5">
      {/* Skeleton для "Back" ссылки */}
      <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />

      <div className="flex gap-5">
        {/* Левая колонка: QuestionContent (3 блока) */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Skeleton для question block */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div> {/* Title "question" */}
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div> {/* Main title */}
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div> {/* Description line 1 */}
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div> {/* Description line 2 */}
          </div>

          {/* Skeleton для short answer block */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div> {/* Title "Short answer" */}
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div> {/* Content line 1 */}
            <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse mb-2"></div> {/* Content line 2 */}
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div> {/* Content line 3 */}
          </div>

          {/* Skeleton для full answer block */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="h-6 w-28 bg-gray-200 rounded animate-pulse mb-4"></div> {/* Title "Full answer" */}
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div> {/* Content line 1 */}
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-2"></div> {/* Content line 2 */}
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-4"></div> {/* Content line 3 */}
            <div className="h-32 w-full bg-gray-200 rounded animate-pulse"></div> {/* Code block */}
          </div>
        </div>

        {/* Правая колонка: Sidebar (3 блока по макету) */}
        <div className="hidden lg:block w-full max-w-[392px] flex-col gap-4">
          {/* Skeleton для верхнего блока sidebar (уровень, рейтинг, сложность) */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2"></div> {/* "Уровень:" */}
            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-1"></div> {/* "Рейтинг:" */}
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mb-1"></div> {/* "Сложность:" */}
            <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div> {/* "Навыки:" */}
          </div>

          {/* Skeleton для второго блока sidebar (тэг) */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div> {/* Заголовок */}
            <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div> {/* Контент */}
          </div>

          {/* Skeleton для третьего блока sidebar (тэг) */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div> {/* Заголовок */}
            <div className="h-3 w-28 bg-gray-200 rounded animate-pulse"></div> {/* Контент */}
          </div>
        </div>
      </div>
    </div>
  );
};