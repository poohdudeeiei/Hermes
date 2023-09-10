var express = require('express');
const HTTP_STATUS = require('../core/value-object');
var router = express.Router();

/**
 * @typedef {Object} RegisterData
 * @property {string} id
 * @property {string} displayName
 * @property {string} password
 */
router.post('/register', async (req, res) => {
    /** @type {RegisterData} */
    const registerData = req.body

    return ( await isIdExist(registerData.id))
        ? res.status(HTTP_STATUS.BAD_REQUEST).json({
            error:"Id already exists.",
            msg: "Choose a new Id or let it empty and try again."
        })

        : (!await createAccount(registerData))?
          res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            error:"Unknown error creating account",
            msg: "Can not create account"
        })

        : res.status(HTTP_STATUS.CREATED).json({
            msg: "Create account successfully",
            data:{
                id: registerData.id,
                displayName: registerData.displayName
            }
    });
});


/**
 * @typedef {Object} LoginDto
 * @property {string} id
 * @property {string} password
 * @property {"exange"|"refresh"} action
 */
router.get("/token", async (req, res) => {
    /** @type {LoginDto} */
    const loginData = req.query;

    if(!tokenAction.hasOwnProperty(loginData.action))
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            error: "Invalid action",
            msg: `Acction '${loginData.action}' is not allowed`
        });


    res.json(token);
});

/**
 * @param {string} id
 * @returns {Promise<boolean>}
 */
const isIdExist = async (id) => {
    //TODO: check if account exists
    return new Promise(res=>{
        setTimeout(() => {
            res(true);
        }, 3000);
    });
}

/**
 * @param {RegisterData} registerData
 * @returns {Promise<boolean>}
 */
const createAccount = async (registerData) => {
    //TODO: create account
    return true;
}


/**
 * @typedef {Object} Token
 * @property {string} tokenType
 * @property {string} acessToken
 * @property {string} refreshToken
 * @property {number} expirein
 */

/**
 * @param {string} token
 * @returns {Promise<Token>}
 */
const refreshToken = async (token) => {
    //TODO: refresh token
    return {
        tokenType: "Bearer",
        acessToken: "jwt",
        refreshToken: "jwt",
        expirein: 10*60
    }
}

/**
 * @param {LoginDto} logindata
 * @returns {Promise<Token>}
 */
const createToken = async (logindata) => {
    //TODO: crate token
    return {
        tokenType: "Bearer",
        acessToken: "jwt",
        refreshToken: "jwt",
        expirein: 10*60
    }
}

module.exports = router;


