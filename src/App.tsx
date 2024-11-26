import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import DetailLayout from "./layouts/DetailLayout";
import ChampionDetailPage from "./pages/ChampionDetail/ChampionDetailPage";

const router = createBrowserRouter([
  {
    path: "/lol-champion-picks",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "details",
        element: <DetailLayout />,
        children: [
          {
            index: true,
            element: <ChampionDetailPage />,
          },
          {
            path: ":championName",
            element: <ChampionDetailPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
