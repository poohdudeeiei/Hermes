const HTTP_STATUS = require("../../core/value-object");
const UserDao = require("../../dao/user.dao");

/**
 * @typedef {Object} UserResponseDto
 * @property {string} userid
 * @property {string} username
 * @property {string} avatar
 * @property {string} displayname
 */

function getProfileFromToken(req, res) {
    loadProfile(req.sub)
    .then(profile=>res.json(profile))
    .catch(e=>
        res.status(HTTP_STATUS.NOT_FOUND).json({
            error: e.message,
            msg: `User id '${req.sub}' have no profile. You can register a new profile`
        })
    );
}

async function loadProfile(userid) {
    const usr = await UserDao.findOne(
        { _id: userid },
        { passwordHash: 0, passwordSalt: 0 }
    );
    return new Promise((resolve, reject) => {
        if (!!usr) {
            /** @type {UserResponseDto} */
            const usrDto = {
                userid: usr._id,
                username: usr._id,
                avatar: usr.avatar,
                displayname: usr.displayname
            }
            resolve(usrDto);
        }else reject(new Error("Profile not found"));
    });
}


module.exports = getProfileFromToken;
