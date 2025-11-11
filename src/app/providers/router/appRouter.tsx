import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../../widgets/layouts/main-layout";
import { HomePage } from "../../../pages/home";
import { QuestionsPage, QuestionPage } from "../../../pages";
import { NotFoundPage } from "../../../pages/notFoundPage/ui/NotFoundPage";

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
          element: <QuestionPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
}
