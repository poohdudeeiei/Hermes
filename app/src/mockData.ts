import { ChatType } from "./models/chat";
import { ChatContact } from "./models/chat-contact";
import { ChatHistory } from "./models/chat-history";
import { MessageType } from "./models/message";
import { User } from "./models/user";

export const mockUser: User[] = [
    {
        _id: "1",
        avatar: '',
        displayName: 'Dextra',
    },
    {
        _id: "2",
        avatar: '',
        displayName: 'Sinestrea'
    }
]

export const mockContact: ChatContact[] = [
    {
        chatID: "123",
        chatName: "Sinestrea",
        type: ChatType.GROUP,
        colour: "red",
        image: "",
        lastMassage: {
            chatID: "123",
            content: {
                type: MessageType.TEXT,
                data: "I love Dextra",
            },
            senderID: "2",
            sendTime: new Date(),
        },
    },
    {
        chatID: "124",
        chatName: "Dextra",
        type: ChatType.CONNECTOR,
        colour: "blue",
        image: "",
        lastMassage: {
            chatID: "124",
            content: {
                type: MessageType.TEXT,
                data: "Sinestra love you",
            },
            senderID: "1",
            sendTime: new Date(),
        },
    },
];

export const mockHistory: ChatHistory[] = [
    {
        chatId: "123",
        messageId: "1",
        chatContent: {
            type: MessageType.TEXT,
            data: "Play game",
        },
        sender: "2",
        timestamp: new Date(),
    },
    {
        chatId: "123",
        messageId: "2",
        chatContent: {
            type: MessageType.TEXT,
            data: "Play game2",
        },
        sender: "2",
        timestamp: new Date(),
    },
    {
        chatId: "124",
        messageId: "3",
        chatContent: {
            type: MessageType.TEXT,
            data: "Let started",
        },
        sender: "1",
        timestamp: new Date(),
    },
];
