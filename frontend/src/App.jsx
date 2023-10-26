import Landing from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Page from "./pages/page.jsx";
import Dashboard from "./pages/dashboard";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
function App() {
  return (
    <>
      {/* <Landing /> */}
      <LoginPage />
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
