import { useState } from "react";
import { User } from "../../../models/user";
import ConnectorCard from "./ConnectorCard";

function GroupPanel() {
    const [isSearchFound, setIsSearchFound] = useState(false);
    const [connectors, setConnectors] = useState<User[]>([]);

    const addGroupConnector = (user: User) => {
        if (!connectors.find((findUser) => user._id === findUser._id))
            setConnectors([...connectors, user]);
        setIsSearchFound(false);
    };

    const search = () => {
        setIsSearchFound(true);
    };

    return (
        <>
            <div className="flex flex-col gap-2 mb-4">
                <label>Group name</label>
                <div className="bg-gray-50 rounded-lg flex gap-2 p-1">
                    <input
                        type="text"
                        className="grow bg-transparent focus:ring-transparent px-4 py-2"
                        placeholder="Group name"
                    ></input>
                </div>
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label>Connector Username</label>
                <div className="bg-gray-50 rounded-lg flex gap-2 p-1">
                    <input
                        type="text"
                        className="grow bg-transparent focus:ring-transparent px-4 py-2"
                        placeholder="Username"
                    ></input>
                    <button
                        onClick={search}
                        className="p-2 text-gray-400 hover:text-gray-700"
                    >
                        {SearchIcon()}
                    </button>
                </div>
            </div>
            {isSearchFound && (
                <ConnectorCard
                    info={{ _id: "123", avatar: "", displayName: "Kevin way" }}
                    addAction={addGroupConnector}
                />
            )}
            <div className="flex flex-col gap-4 mt-4">
                <ul className="flex flex-wrap -space-x-4">
                    {connectors.map((connector) => (
                        <li>
                            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white"></div>
                        </li>
                    ))}
                </ul>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold text-white ${
                        connectors.length > 2
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={connectors.length <= 2}
                >
                    Create group
                </button>
            </div>
        </>
    );
}

const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
    </svg>
);

export default GroupPanel;
