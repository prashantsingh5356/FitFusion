// React Imports

//Component Imports
import Onbaording from "./pages/Onboarding";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

// React lib imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OnboardingProvider from "./context/OnboardingProvider";

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
