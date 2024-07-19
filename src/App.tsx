import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AppProvider } from "./context/Context";
import Gallery from "./pages/Gallery";
import Anniversary from "./pages/Anniversary";
import Date from "./pages/Date";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/anniversary",
      element: <Anniversary />,
    },
    {
      path: "/date",
      element: <Date />,
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
