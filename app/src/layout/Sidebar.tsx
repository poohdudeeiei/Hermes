import { useState } from "react";
import Brand from "../components/Brand";
import ConnectorList from "../components/ConnectorList/ConnectorList";
import SearchBar from "../components/Searchbar";

function Sidebar() {
  const [isMainSettingsOpen, setIsMainSettingsOpen] = useState(false);

  const openMainSettingsOpen = () => {
    setIsMainSettingsOpen(!isMainSettingsOpen);
  };
  const closeMainSettingsOpen = () => {
    setIsMainSettingsOpen(!isMainSettingsOpen);
  };

  return (
    <div className="grow-0 shrink-0 w-80 h-screen border-r relative">
      <div>
        <Brand />
        <div className="px-6 py-3 flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-violet-400"></div>
            <p className="font-bold">Saksit Sirisakda</p>
          </div>
          <button
            onClick={openMainSettingsOpen}
            className="p-2 hover:bg-gray-100 rounded-full"
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
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
        <div className="px-6 py-3">
          <SearchBar />
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
              Connector
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-semibold">
              Group
            </button>
          </div>
        </div>
        <div
          className="overflow-y-auto"
          style={{ height: "calc( 100vh - 232px )" }}
        >
          <ConnectorList />
        </div>
      </div>
      <div
        className={`h-full ${
          isMainSettingsOpen ? "w-full visble" : "w-0 invisible"
        } bg-white top-0 left-0 absolute min-h-0 transition-all`}
      >
        <div className="">
          <button onClick={closeMainSettingsOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
