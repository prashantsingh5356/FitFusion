// React Imports

//Component Imports
import Onbaording from "./pages/Onboarding";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// React lib imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OnboardingProvider from "./context/OnboardingProvider";
import { Box } from "@mui/material";
import HomeComponent from "./components/HomeComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/onboarding",
      element: <Onbaording />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <HomeComponent />,
        },
        {
          path: "members",
          element: <h1>Members</h1>,
        },
        {
          path: "child1",
          element: <h1>Child 1</h1>,
        },
        {
          path: "child2",
          element: <h1>Child 2</h1>,
        },
        {
          path: "child3",
          element: <h1>Child 3</h1>,
        },
      ],
    },
  ]);

  return (
    <>
      <OnboardingProvider>
        <RouterProvider router={router} />
      </OnboardingProvider>
    </>
  );
}

export default App;
