const HTTP_STATUS = require("../core/value-object");

/**
 * @typedef {Object} AuthorizationHeader
 * @property {string} authorization
 */


const authGuard = (req, res, next) => {
    /** @type {AuthorizationHeader} */
    const header = req.headers;
    if (!header.authorization)
        return res.status(HTTP_STATUS.FORBIDDEN).json({
            error: "Can not get Token.",
            msg: "Attach token to authentication header."
        });
    if(!verifyToken(header.authorization, id=>req.sub=id ))
        return res.status(HTTP_STATUS.TOKEN_EXPIRED_INVALID).json({
            error:"Token is not valid.",
            msg: "refresh your token."
        })
    next();
}

function verifyToken(token, callback) {
    //TODO: verify jwt
    console.warn('bypassing token validation : ' + token);
    callback("claim id");
    return true;
}

module.exports = authGuard;
