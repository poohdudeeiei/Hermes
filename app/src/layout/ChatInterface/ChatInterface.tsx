import ChatHeader from "../../components/Chat/ChatHeader";
import ChatBox from "../../components/Chat/ChatBox";
import TextBox from "../../components/Chat/TextBox";
import ChatSettings from "../ChatSettings/ChatSettings";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { ChatHistory } from "../../models/chat-history";

function ChatInterface() {
    const chatHistory = useLoaderData() as ChatHistory[]
    const [isChatSettingsOpen, setIsChatSettingsOpen] = useState(false);

    const handleSettingsDisplay = (isOpen: boolean) => {
        setIsChatSettingsOpen(isOpen);
    };
    return (
        <div className="flex grow">
            <div className="h-screen grow">
                <ChatHeader settings={handleSettingsDisplay} />
                <div
                    className="relative"
                    style={{ height: `calc( 100vh - 136px)` }}
                >
                    <ChatBox data={chatHistory} />
                </div>
                <TextBox />
            </div>
            <div>
                {isChatSettingsOpen && (
                    <ChatSettings name="John Smith" isActive={false} />
                )}
            </div>
        </div>
    );
}

export default ChatInterface;
