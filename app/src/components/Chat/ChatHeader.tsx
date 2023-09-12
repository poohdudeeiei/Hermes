import { useState } from "react";

function ChatHeader({ settings }: { settings: (isOpen: boolean) => void }) {
  const [openStatus, setOpenStatus] = useState(true);

  const onClickSettings = () => {
    settings(openStatus);
    setOpenStatus(!openStatus);
  };

  return (
    <nav className="px-6 py-3 shadow flex items-center justify-between sticky top-0 z-10">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 bg-teal-200 rounded-full object-cover overflow-hidden"></div>
        <div>
          <p className="text-lg font-bold">John Smith</p>
          <p className="text-xs">Online</p>
        </div>
      </div>
      <button onClick={onClickSettings} className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </button>
    </nav>
  );
}

export default ChatHeader;
