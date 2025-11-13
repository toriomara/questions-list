import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../../widgets/layouts/main-layout";
import { HomePage } from "../../../pages/home";
import { QuestionsPage, QuestionPage } from "../../../pages";
import { NotFoundPage } from "../../../pages/notFoundPage/ui/NotFoundPage";

const QuestionPageLazy = lazy(() =>
  import("../../../pages/question/ui/QuestionPage").then((module) => ({
    default: module.QuestionPage,
  }))
);

export function appRouter() {
  return createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/questions",
          element: <QuestionsPage />,
        },
        {
          path: "/questions/:id",
          element: <QuestionPageLazy />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
}
