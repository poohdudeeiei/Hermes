/**
* @typedef {Object} TokenContent
* @property {string} id
*/

function parseToken(token) {
    console.debug("parse : ", token);
    const x = token.split(' ');
    return { type: x[0], token: x[1] }
}

/**
* @param {string} token
* @returns {Promise<TokenContent>}
*/
function virifyToken(token) {
    // TODO: virify token and get content in token
    console.debug("viriry : ", token);
    console.warn('bypassing token validation : ' + token);
    const t = parseToken(token);
    return new Promise(resove => {
        resove({ id: t.token });
    });
}

module.exports.virifyToken = virifyToken;
