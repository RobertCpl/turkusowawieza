import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Policy from "./Pages/Policy";

const router = createBrowserRouter([
   {
      path: "/",
      element: <RootLayout />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/polityka-prywatnosci", element: <Policy /> },
         { path: "/formularz-zgloszeniowy", element: <Contact /> },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
