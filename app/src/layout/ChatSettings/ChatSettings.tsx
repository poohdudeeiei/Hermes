import { useState } from "react";
import SettingsMenu from "./SettingsMenu";

interface Profile {
    name: string;
    isActive: boolean;
}

export default function ChatSettings({
    name = "John Smith",
    isActive = true,
}: Profile) {
    const [isMuted, setIsMuted] = useState(false);

    const toggleMuted = () => setIsMuted(!isMuted);

    return (
        <div
            className={`grow-0 shrink-0 h-screen border-l min-h-0 transition-all w-80`}
        >
            <div className={`flex flex-col gap-4 items-center p-6`}>
                <div className={`w-20 h-20 bg-gray-200 rounded-full`}></div>
                <div className="text-center">
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs">
                        {isActive ? "Active now" : "Offline"}
                    </p>
                </div>
                <div className="flex gap-8">
                    <div>
                        <button
                            onClick={toggleMuted}
                            className={`p-2 mb-1 bg-gray-200 hover:bg-gray-300 rounded-full ${
                                isMuted ? "text-gray-500" : ""
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                {isMuted ? (
                                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.57 16.476c-.223.082-.448.161-.674.238L7.319 4.137A6.75 6.75 0 0118.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206z" />
                                ) : (
                                    ""
                                )}

                                <path
                                    fillRule="evenodd"
                                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <span className="block text-center text-xs">Mute</span>
                    </div>
                    <div>
                        <button className="p-2 mb-1 bg-gray-200 hover:bg-gray-300 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <span className="block text-center text-xs">
                            Search
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <SettingsMenu />
            </div>
        </div>
    );
}
