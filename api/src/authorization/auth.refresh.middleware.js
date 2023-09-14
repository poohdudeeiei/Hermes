const HTTP_STATUS = require("../core/value-object");
require("dotenv").config()
const jwt = require("jsonwebtoken")

/**
 * @typedef {Object} ValidateRefreshTokenHeader
 * @property {string} authorization
 */

const jwtRefreshTokenValidate = async (req, res, next) => {
    /** @type {ValidateRefreshTokenHeader} */
    const header = req.headers;
    if (!header.authorization) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({
            error: "Can not get Token.",
            msg: "Attach token to authentication header."
        });
    }
    await verifyRefreshToken(header.authorization).then((check) => {
        if (!check.isvalid) {
            return res.status(HTTP_STATUS.TOKEN_EXPIRED_INVALID).json({
                error: "Token is not valid.",
                msg: "refresh your token."
            })
        } else {
            req.user = jwt.decode(check.token)
            req.user.token = check.token
            delete req.user.exp
            delete req.user.iat
            next();
        }
    })

}

/**
 *
 * @param {string} requestheader
 * @returns {Promise}
 */

const verifyRefreshToken = async (requesttoken) => {
    //TODO: verify refreshjwt
    return new Promise((resolve, reject) => {
        console.warn('bypassing refresh token validation : ' + requesttoken);
        const token = requesttoken.replace("Bearer ", "")

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                resolve(false)
            } else {
                resolve({ isvalid: true, token: token })
            }
        })
    })
}

module.exports = jwtRefreshTokenValidate
