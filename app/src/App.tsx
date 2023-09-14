import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ChatInterface from "./layout/ChatInterface/ChatInterface";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Plain from "./pages/Plain";
import Sidebar from "./layout/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import { mockContact, mockHistory } from "./mockData";

const router = createBrowserRouter([
    {
        path: "/",
        loader: () => mockContact,
        element: (
            <div className="flex h-screen">
                <Sidebar></Sidebar>
                <Outlet />
            </div>
        ),
        children: [
            {
                path: "",
                element: <Plain />,
            },
            {
                path: ":chatId",
                loader: ({ params }) =>
                    mockHistory.filter(
                        (message) => message.chatId === params.chatId
                    ),
                element: <ChatInterface />,
            },
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
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
            console.log(isConnected);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, [isConnected]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;

