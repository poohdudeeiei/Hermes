// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import AuthContext from "./context/AuthContext";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ChatInterface from "./layout/ChatInterface";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Plain from "./pages/Plain";
import Sidebar from "./layout/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex h-screen">
        <Sidebar></Sidebar>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "",
        element: <Plain />
      },
      {
        path: ":chatId",
        element: <ChatInterface />,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    // Context for login
    // <AuthContext>
      <RouterProvider router={router} />
    // </AuthContext>
  );
}

export default App;
