import ChatHeader from "../components/Chat/ChatHeader";
import ChatBox from "../components/Chat/ChatBox";
import TextBox from "../components/Chat/TextBox";
import { useState } from "react";

function ChatInterface() {
  const [isChatSettingsOpen, setIsChatSettingsOpen] = useState(false);

  const handleSettingsDisplay = (isOpen: boolean) => {    
    setIsChatSettingsOpen(isOpen);
  };

  return (
    <div className="flex grow">
      <div className="h-screen grow">
        <ChatHeader settings={handleSettingsDisplay} />
        <div className="relative" style={{ height: "calc( 100vh - 136px )" }}>
          <ChatBox />
        </div>
        <TextBox />
      </div>
      <div
        className={`grow-0 shrink-0 h-screen border-l min-h-0 transition-all ${
          isChatSettingsOpen ? "w-80" : "w-0"
        }`}
      ></div>
    </div>
  );
}

export default ChatInterface;
