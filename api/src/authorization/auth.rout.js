var express = require('express');
const HTTP_STATUS = require('../core/value-object');
const { users } = require("../core/mock")
var router = express.Router();
var jwtRefreshTokenValidate = require("./auth.refresh.middleware")
var jwt = require("jsonwebtoken")
require("dotenv").config()

/**
 * @typedef {Object} RegisterData
 * @property {string} id
 * @property {string} displayName
 * @property {string} password
 */
router.post('/register', async (req, res) => {
    /** @type {RegisterData} */
    const registerData = req.body

    return (await isIdExist(registerData.id))
        ? res.status(HTTP_STATUS.BAD_REQUEST).json({
            error: "Id already exists.",
            msg: "Choose a new Id or let it empty and try again."
        })

        : (!await createAccount(registerData)) ?
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
                error: "Unknown error creating account",
                msg: "Can not create account"
            })

            : res.status(HTTP_STATUS.CREATED).json({
                msg: "Create account successfully",
                data: {
                    id: registerData.id,
                    displayName: registerData.displayName
                }
            });
});


/**
 * @typedef {Object} LoginDto
 * @property {string} id
 * @property {string} password
 * @property {"login"} action
 */
router.get("/login/token", async (req, res) => {
    /** @type {LoginDto} */
    //TODO: login  done
    const loginData = req.query;
    const userIndex = users.findIndex((u) => (u.username === loginData.username) && (u.password === loginData.password))
    if (!loginData || userIndex < 0) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            error: "Invalid username or password",
            msg: "Try to input again"
        })
    }
    const access_token = await createToken(users[userIndex])
    console.log("access_token: ", access_token)
    const refresh_token = await refreshToken(users[userIndex])
    console.log("refresh_token: ", refresh_token)


    if (!access_token || !refresh_token) return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: "Server error.",
        msg: "Try it later."
    })
    users[userIndex].refresh = refresh_token

    res.json({
        access_token,
        refresh_token
    })
});

/**
 * @typedef {Object} refreshDto
 * @property {string} id
 * @property {string} password
 * @property {"refresh"} action
 */
router.get("/token/refresh", jwtRefreshTokenValidate, async (req, res) => {
    /** @type {refreshDto} */

    //TODO: refresh token done
    const user = users.find((u) => u.id === req.user.id && u.username === req.user.username);
    const userIndex = users.findIndex((u) => u.refresh === req.user.token)
    console.log("userIndex : ", userIndex)
    if (!user || userIndex < 0) {
        return res.status(HTTP_STATUS.FORBIDDEN).json({
            error: "Invalid username or password",
            msg: "Try to input again"
        })
    }
    const access_token = await createToken(users[userIndex])
    const refresh_token = await refreshToken(users[userIndex])

    if (!access_token || !refresh_token) return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: "Server error.",
        msg: "Try it later."
    })
    users[userIndex].refresh = refresh_token
    res.json({
        access_token,
        refresh_token
    })
})


/**
 * @param {string} id
 * @returns {Promise<boolean>}
 */
const isIdExist = async (id) => {
    //TODO: check if account exists
    return new Promise(res => {
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
const refreshToken = async (logindata) => {
    //TODO: refresh token
    /* Refresh token key */
    const userData = { id: logindata.id, username: logindata.username, avatar: logindata.avatar, displayname: logindata.displayname }
    const refresh_secret = process.env.REFRESH_TOKEN_SECRET
    const refresh_token = jwt.sign(userData, refresh_secret, { expiresIn: "1d", algorithm: "HS256" })
    return refresh_token
}

/**
 * @param {LoginDto} logindata
 * @returns {Promise<Token>}
 */
const createToken = async (logindata) => {
    //TODO: crate token done
    /* Access token key */
    const userData = { id: logindata.id, username: logindata.username, avatar: logindata.avatar, displayname: logindata.displayname }
    const access_secret = process.env.ACCESS_TOKEN_SECRET
    const access_token = jwt.sign(userData, access_secret, { expiresIn: 20, algorithm: "HS256" })
    return access_token
}

module.exports = router;


