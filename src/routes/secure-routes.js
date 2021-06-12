const express = require('express');
const router = express.Router();
const { UserModel } = require('../model/user');

router.get( '/profile', (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    })
  }
);

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router;