import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../../widgets/layouts/main-layout";
import { HomePage } from "../../../pages/home";
import { NotFoundPage } from "../../../pages/notFoundPage/ui/NotFoundPage";

const QuestionPageLazy = lazy(() =>
  import("../../../pages/question/ui/QuestionPage").then((module) => ({
    default: module.QuestionPage,
  }))
);

const QuestionsPageLazy = lazy(() =>
  import("../../../pages/questions/ui/QuestionsPage").then((module) => ({
    default: module.QuestionsPage,
  }))
);

const NotFoundPageLazy = lazy(() =>
  import("../../../pages/notFoundPage/ui/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
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
          element: <QuestionsPageLazy />,
        },
        {
          path: "/questions/:id",
          element: <QuestionPageLazy />,
        },
        {
          path: "*",
          element: <NotFoundPageLazy />,
        },
      ],
    },
  ]);
}
