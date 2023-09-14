var HTTP_STATUS = require("../../core/value-object")

/**
 * @typedef {object} check
 */

/* Check sub request */
const checkSub = (req, res, next) => {
    //TODO change mock contact and change params
    if (!req.params.id) {
        return res.status(HTTP_STATUS.NOT_FOUND).json({
            error: "Value is null",
            msg: "Check your token"
        })
    }
    next()
}

module.exports = checkSub
