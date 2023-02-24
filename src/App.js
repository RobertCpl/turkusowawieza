import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/World/RootLayout";
import Contakt from "./Pages/Form";
import Home from "./Pages/Home";
import Polityka from "./Pages/Polityka";

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/polityka-prywatnosci", element: <Polityka /> },
         { path: "/kontakt", element: <Contakt /> },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
