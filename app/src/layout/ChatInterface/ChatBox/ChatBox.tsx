import { ChatHistory } from "../../../models/chat-history";
import Message from "../../../components/Message";
import { mockMe } from "../../../mockData";

interface ChatBoxProps {
    data: ChatHistory[];
}

function ChatBox({ data }: ChatBoxProps) {
    return (
        <div className="flex items-end relative h-full">
            <div className="flex grow flex-col-reverse gap-4 overflow-y-auto p-4 max-h-full">
                {data.map((msg) => (
                    <Message key={msg.messageId} isSelf={msg.sender === mockMe._id} msg={msg} />
                ))}
            </div>
        </div>
    );
}

export default ChatBox;
