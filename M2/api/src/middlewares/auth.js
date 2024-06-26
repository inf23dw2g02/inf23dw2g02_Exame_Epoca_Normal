const auth = function (req, res, next) {
  console.log("req user", req.user);
  if (req.isAuthenticated() && req.user.token) { // Check if token is present
    console.log("auth success");
    req.profileToken = req.user.token; // Add the profile token to the request object
    return next();
  }
  console.log("auth failed");
  res.redirect("/login");
};

module.exports = auth;