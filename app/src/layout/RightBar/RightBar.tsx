import TreeViewMenu from "./Menu";

export default function RightBar() {
    return (
        <div
            className={`grow-0 shrink-0 h-screen border-l min-h-0 transition-all w-80`}
        >
            <div className={`flex flex-col items-center`}>
                <div className="mx-auto mt-5 mb-2">
                    <div className={`w-20 h-20 bg-gray-200 rounded-full`}></div>
                </div>
                <div className="">
                    <div className="font-semibold">หอ9+หอ10+3+2+1</div>
                </div>

                <div className="mt-1 mb-5 font-normal text-gray-500">
                    <div className="text-xs">Active now</div>
                </div>

                <div className="flex gap-8 mb-3">
                    <div className="flex flex-col items-center">
                        <div className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                />
                            </svg>
                        </div>
                        <div className="text-xs m-1">Mute</div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="p-1.5 bg-gray-200 hover:bg-gray-300 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </div>
                        <div className="text-xs m-1">Search</div>
                    </div>
                </div>
            </div>

            <div>
                <TreeViewMenu></TreeViewMenu>
            </div>
        </div>
    );
}
