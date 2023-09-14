import { Message, MessageType } from "../../models/message";
import { displayDate } from "../../utilities";

interface MessageProps {
    isSelf: boolean;
    msg: Message;
}

function Message({ isSelf, msg }: MessageProps) {
    return (
        <div
            className={`flex gap-3 ${
                !isSelf ? "self-start me-20" : "self-end ms-20"
            }`}
        >
            {!isSelf ? (
                <div className="w-10 h-10 bg-gray-200 rounded-full grow-0 shrink-0"></div>
            ) : (
                timePanel(msg.sendTime)
            )}
            {msg.content.type === MessageType.TEXT ? (
                <div className="bg-gray-200 px-4 py-2 rounded-lg">
                    {msg.content.data}
                </div>
            ) : (
                <div className="rounded-lg overflow-hidden">
                    <img src={msg.content.data} className="w-72"></img>
                </div>
            )}
            {!isSelf ? timePanel(msg.sendTime) : ""}
        </div>
    );
}

const timePanel = (time: Date) => <span className="text-xs self-end">{displayDate(time)}</span>;

export default Message;
