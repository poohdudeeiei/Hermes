import { useState } from "react";
import Brand from "../components/Util/Brand";
import ConnectorList from "../components/Connector/ConnectorList";
import SearchBar from "../components/Util/Searchbar";

function Sidebar() {
    const [isMainSettingsOpen, setIsMainSettingsOpen] = useState(false);

    const openMainSettingsOpen = () => {
        setIsMainSettingsOpen(!isMainSettingsOpen);
    };
    const closeMainSettingsOpen = () => {
        setIsMainSettingsOpen(!isMainSettingsOpen);
    };

    return (
        <div className="grow-0 shrink-0 w-96 h-screen border-r relative">
            <div>
                <div className="flex items-center justify-between px-6 py-3">
                    <Brand />
                    <button className="flex items-center p-3 rounded-full hover:bg-gray-100">
                        <svg
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-8 h-8"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 12H12M15 12H12M12 12V9M12 12V15"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="px-6 py-3">
                    <div className="mb-3">
                        <SearchBar />
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                            All
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-semibold">
                            Connector
                        </button>
                        <button className="px-4 py-2 rounded-full text-sm font-semibold">
                            Group
                        </button>
                    </div>
                </div>
                <div
                    className="overflow-y-auto"
                    style={{ height: "calc( 100vh - 256px )" }}
                >
                    <ConnectorList />
                </div>
            </div>
            <div
                className={`h-full ${
                    isMainSettingsOpen
                        ? "w-full visible left-0"
                        : "w-0 invisible -left-full"
                } bg-white top-0 absolute min-h-0 transition-all ease-in-out p-4 duration-500`}
            >
                <div className="flex flex-col gap-3">
                    <button
                        onClick={closeMainSettingsOpen}
                        className="p-3 hover:bg-gray-100 rounded-full self-start"
                    >
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
                                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                            />
                        </svg>
                    </button>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="w-24 h-24 bg-gray-200 rounded-full self-center"></div>
                        <p className="text-2xl font-bold">Edogawa Conan</p>
                        <p className="text-xs text-gray-500">#1245658</p>
                    </div>
                    <button className="flex items-center gap-4 font-bold p-2 rounded-xl hover:bg-gray-100">
                        <span className="p-2 bg-gray-200 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        Change name
                    </button>
                    <button className="flex items-center gap-4 font-bold p-2 rounded-xl hover:bg-gray-100">
                        <span className="p-2 bg-gray-200 rounded-lg">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                            >
                                <path
                                    d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M4.56141 11.2498L6.63141 9.17984C6.78141 9.02984 6.85141 8.83984 6.85141 8.64984C6.85141 8.45984 6.78141 8.25984 6.63141 8.11984C6.34141 7.82984 5.86141 7.82984 5.57141 8.11984L2.22141 11.4698C1.93141 11.7598 1.93141 12.2398 2.22141 12.5298L5.57141 15.8798C5.86141 16.1698 6.34141 16.1698 6.63141 15.8798C6.92141 15.5898 6.92141 15.1098 6.63141 14.8198L4.56141 12.7498H9.00141V11.2498H4.56141Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                        Logout
                    </button>
                </div>
            </div>
            <div className="px-6 py-3 flex justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <p className="font-bold">Saksit Sirisakda</p>
                </div>
                <button
                    onClick={openMainSettingsOpen}
                    className="p-2 hover:bg-gray-100 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
