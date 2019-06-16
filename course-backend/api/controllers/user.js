const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
var config = require('../../config.json');
const sendMail = require("../services/sendMail");


const User = require("../models/user");

exports.user_register = (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err.toString());
                        return res.status(500).json({
                            error: err
                        });

                    } else {
                        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
                        var id = crypto.randomBytes(16).toString('hex');
                        sendMail.send(req.body.email, fullUrl, id);
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            login: req.body.login,
                            email: req.body.email,
                            password: hash,
                            role: 'simple',
                            active: false,
                            activationID: id
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    success: "true",
                                    message: "User created"
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });


                    }
                });
            }
        });
};

exports.user_login = (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }
                if (result) {
                    if (user[0].active === false) {
                        return res.status(403).json({
                            message: "Need to verify email"
                        });
                    }
                    const token = jwt.sign(
                        {
                            login: user[0].login,
                            email: user[0].email,
                            userId: user[0]._id,
                        },
                        config.JWT_KEY,
                        {
                            expiresIn: "7d"
                        }
                    );
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Auth failed"
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.user_delete = (req, res, next) => {
    User.remove({_id: req.params.userId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: "User deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.user_confirm = (req, res, next) => {
    User.update({activationID: req.params.activationID}, {activationID: "", active: true}, {multi: true})
        .then((user) => {
            if (user.n < 1) {
                res.status(208).json({
                    message: "Already activated or dont exist"
                })
            } else {
                res.status(200).send(
                    `
                <div style="text-align: center; font-size: larger">
                
                    <H1;">User confirmed!!!</H1>
                    <script>
                        window.location.replace('${config.URL.frontend}/confirmed');                        
                    </script>
                 </div>
                 
                `
                );
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};