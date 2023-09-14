
const HTTP_STATUS = require("../../core/value-object");
const { users } = require("../../core/mock");
/**
 * @typedef {object} getUserId
 * @param {string} id
 */

/* GET users ID. */
const getUserId = async (req, res) => {
    //TODO: change user models
    const user = users.find(user => user.id === req.params.id)
    return (!user) ?
        res.status(HTTP_STATUS.NOT_FOUND).json({
            error: `Not Found User [ID:${req.params.id}]`,
            msg: "Try to input other Id"
        })

        : res.status(HTTP_STATUS.FOUND).json({
            msg: "Found Content",
            user: {
                username: user.username,
                avatar: user.avatar,
                displayname: user.displayname
            }
        })
};

module.exports = getUserId
