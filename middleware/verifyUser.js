module.exports = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.json({
      errorMsg: 'You need to login first',
    });
  }
  next();
};