const express = require('express');
const picturesRouter = express.Router();
const Picture = require('../models/picture');
const User = require('../models/user');
const verifyUser = require('../middleware/verifyUser');

picturesRouter.get('/', function(req, res) {
  Picture.find({}, { __v: false })
    .lean()
    .populate('created_by', 'username profilePicture')
    .exec()
    .then(pictures => {
      res.json({
        message: 'All Pictures',
        pictures,
      });
    })
    .catch(err => console.log(err));
});

picturesRouter.post('/', verifyUser, function(req, res) {
  const { url, description } = req.body;

  let newPicture = new Picture({
    url,
    description,
    likes: 0,
    created_by: req.user._id,
  });

  newPicture
    .save()
    .then(picture =>
      // Populate Picture
      Picture.findById(picture._id, { __v: false })
        .populate('created_by', 'username profilePicture')
        .exec()
    )
    .then(popPic =>
      User.updateOne(
        { _id: req.user._id },
        { $push: { pictures: popPic._id } }
      ).then(resp => {
        if (resp.nModified && resp.ok) {
          res.json({
            message: 'Picture added',
            picture: popPic,
          });
        }
      })
    )
    .catch(err => console.log(err));
});

module.exports = picturesRouter;