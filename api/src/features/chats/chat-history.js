const HTTP_STATUS = require("../../core/value-object");
const ChatDao = require("../../dao/chat.dao");
const MessageDao = require("../../dao/message.dao");

const HISTORY_SIZE = 5;

async function getChatHistory(req, res) {
    if (!req.query.ref)
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            error:"Invalid reference",
            msg:"Query 'ref' should not be empty.",
        })
    else getChatHistoryFromRef(req.query.ref).then(h => {
        res.json(h.map(i => {
            return {
                chatId: i.chatID,
                messageId: i._id,
                sender: i.senderID,
                timestame: i.sendTime,
                chatContent: i.content
            }
        }).reverse());
    }).catch(e => {
        res.json({ error: e.message })
    });
}

async function getChatHistoryFromRef(refId) {
    const ref = await loadRefFromMessageId(refId);
    const messageHistories = await MessageDao.find({})
        .where("chatID").eq(ref?.chatId ?? refId)
        .where("sendTime").lt(ref?.sendTime ?? Date.now())
        .sort("-sendTime")
        .limit(2)
    if (messageHistories.length == 0)
        throw new Error("End of message history");
    return messageHistories;
}

async function loadRefFromMessageId(messageID) {
    return await MessageDao
        .findOne({ _id: messageID })
        .select("sendTime")
        .select("chatID");
}

module.exports = getChatHistory;
