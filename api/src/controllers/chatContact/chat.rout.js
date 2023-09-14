const HTTP_STATUS = require("../../core/value-object")
const { contacts } = require("../../core/mock")


/**
 * @typedef {object} contactUser
 * @param {string} id
 */

/* GET all contacts User*/
const contactUser = async (req, res) => {
    //TODO change mock contact and change params
    const id = req.params.id
    const allContactUsers = contacts.filter(contact => contact.members.id === id)
    return (allContactUsers.length === 0) ?
        res.status(HTTP_STATUS.OK).json({
            error: "No have contact",
            msg: "You can add another contacts"
        })

        : res.status(HTTP_STATUS.FOUND).json({
            msg: "Found COntacts",
            contacts: allContactUsers
        })
}

module.exports = contactUser
