import { ChatType } from "./models/chat";
import { ChatContact } from "./models/chat-contact";
import { ChatHistory } from "./models/chat-history";
import { MessageType } from "./models/message";
import { User } from "./models/user";

export const mockMe: User = {
    _id: "0",
    avatar: "",
    displayName: "Adam",
};

export const mockUser: User[] = [
    {
        _id: "0",
        avatar: "",
        displayName: "Adam",
    },
    {
        _id: "1",
        avatar: "",
        displayName: "Bobby",
    },
    {
        _id: "2",
        avatar: "",
        displayName: "Chris",
    },
    {
        _id: "3",
        avatar: "",
        displayName: "Dan",
    },
    {
        _id: "4",
        avatar: "",
        displayName: "Evan",
    },
    {
        _id: "5",
        avatar: "",
        displayName: "Frank",
    },
    {
        _id: "6",
        avatar: "",
        displayName: "Gordon",
    },
];

export const mockContact: ChatContact[] = [
    {
        chatID: "c1",
        chatName: "Bobby",
        type: ChatType.PRIVATE,
        colour: "",
        image: "",
        lastMassage: {
            chatID: "c1",
            content: {
                type: MessageType.TEXT,
                data: "I want to go to eat something",
            },
            senderID: "1",
            sendTime: new Date(),
        },
    },
    {
        chatID: "c2",
        chatName: "Chris",
        type: ChatType.PRIVATE,
        colour: "",
        image: "",
        lastMassage: {
            chatID: "c2",
            content: {
                type: MessageType.TEXT,
                data: "See you tomorrow",
            },
            senderID: "0",
            sendTime: new Date(),
        },
    },
    {
        chatID: "c3",
        chatName: "Three Man Right",
        type: ChatType.GROUP,
        colour: "",
        image: "",
        lastMassage: {
            chatID: "c3",
            content: {
                type: MessageType.TEXT,
                data: "Send me an answer",
            },
            senderID: "3",
            sendTime: new Date(),
        },
    },
];

export const mockHistory: ChatHistory[] = [
    {
        chatId: "c1",
        messageId: "1",
        chatContent: {
            type: MessageType.TEXT,
            data: "I want to go to eat something",
        },
        sender: "1",
        timestamp: new Date(),
    },
    {
        chatId: "c1",
        messageId: "2",
        chatContent: {
            type: MessageType.TEXT,
            data: "One plz",
        },
        sender: "1",
        timestamp: new Date(),
    },
    {
        chatId: "c1",
        messageId: "3",
        chatContent: {
            type: MessageType.TEXT,
            data: "Bobby, do you need some coffee?",
        },
        sender: "0",
        timestamp: new Date(),
    },
    {
        chatId: "c2",
        messageId: "1",
        chatContent: {
            type: MessageType.TEXT,
            data: "See you tomorrow",
        },
        sender: "0",
        timestamp: new Date(),
    },
    {
        chatId: "c2",
        messageId: "2",
        chatContent: {
            type: MessageType.TEXT,
            data: "I should go home. See ya",
        },
        sender: "1",
        timestamp: new Date(),
    },
    {
        chatId: "c3",
        messageId: "1",
        chatContent: {
            type: MessageType.TEXT,
            data: "Send me an answer",
        },
        sender: "3",
        timestamp: new Date(),
    },
];

export const getUserInfoById = (id: string) =>
    mockUser.find((user) => user._id === id);
