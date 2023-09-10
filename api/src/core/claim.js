/**
 * @param {string} name
 * @param {Object} req
 * @returns actions
 */
function setCliam(name, req) {
    return claim => {
        if (!req.cliam) req.cliam = {};
        req.cliam[name] = claim
        console.log(req.cliam);
    }
}

module.exports = setCliam
