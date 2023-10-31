import Landing from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Page from "./pages/page.jsx";
import Dashboard from "./pages/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  return (
    <>
      <Landing />
      {/* <LoginPage /> */}
      {/* <Dashboard /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <LoginPage />,
  },
]);

export default router;
