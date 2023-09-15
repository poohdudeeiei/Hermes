import ChatContact from "./ChatContact";
import { ChatContact as ChatContactModel } from "../../../models/chat-contact";

interface ChatContactListProps {
    chats: ChatContactModel[];
}

function ChatContactList({chats}: ChatContactListProps) {
    return (
        <ul className="flex flex-col">
            {chats.map((connector) => (
                <li key={connector.chatID}>
                    <ChatContact data={connector} />
                </li>
            ))}
        </ul>
    );
}

export default ChatContactList;
