const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

exports.register = (req, res) => {
    let user = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        if (!err) {
            bcrypt.hash(user.password, salt, async (err, hpass) => {
                if (!err) {
                    user.password = hpass
                    try {
                        await userModel.create(user)
                        res.status(201).send({ message: "User Registred successfully " })
                    } catch (err) {
                        res.status(500).send({ message: "Something Worng" })
                    }
                }
            })
        }
    })
}

exports.login = async (req, res) => {
    const userCred = req.body
    try {
        const user = await userModel.findOne({ email: userCred.email })
        if (user != null) {
            bcrypt.compare(userCred.password, user.password, (err, result) => {
                if (result == true) {
                    jwt.sign({ email: userCred.email }, process.env.JWT_SECRET, (err, token) => {
                        res.send({ message: "Login Successfully", token })
                    })
                } else {
                    res.status(403).send({ message: "Invaild Password" })
                }
            })
        } else {
            res.status(404).send({ message: "User Not Found" })
        }
    } catch (err) {
        res.status(500).send({ message: "some problem" })
    }
}
