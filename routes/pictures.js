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

picturesRouter.delete('/:pictureID', verifyUser, function(req, res) {
  const pictureID = req.params.pictureID;

  // Remove from Pictures Collection
  Picture.remove({ _id: pictureID })
    // Remove from Users Collection
    .then(() =>
      User.updateMany({}, { $pull: { pictures: pictureID, liked: pictureID } })
    )
    .then(() =>
      // Send answer
      res.json({
        message: 'Picture Removed',
      })
    )
    .catch(err => console.log(err));
});

// LIKES
picturesRouter.put('/:pictureID', verifyUser, function(req, res) {
  const pictureID = req.params.pictureID;

  if (req.query.like) {
    Picture.updateOne({ _id: pictureID }, { $inc: { likes: 1 } })
      .then(() =>
        User.updateOne(
          { _id: req.user._id },
          { $addToSet: { liked: pictureID } }
        )
      )
      .then(() =>
        res.json({
          message: 'Picture Liked',
        })
      )
      .catch(err => console.log(err));
  } else if (req.query.unlike) {
    Picture.updateOne({ _id: pictureID }, { $inc: { likes: -1 } })
      .then(() =>
        User.updateOne(
          { _id: req.user._id },
          { $pull: { liked: pictureID } }
        )
      )
      .then(() =>
        res.json({
          message: 'Picture Liked',
        })
      )
      .catch(err => console.log(err));
  }
});

module.exports = picturesRouter;
