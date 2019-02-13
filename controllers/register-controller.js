var connection = require("./../config");
module.exports.register = function(req, res) {
  var today = new Date();
  var users = {
    //id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
    gender: req.body.gender
  };
  connection.query("INSERT INTO userinfo SET ?", users, function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.json({
        status: false,
        message: "there are some error with query"
      });
    } else {
      res.json({
        status: true,
        data: results,
        message: "user registered sucessfully"
      });
    }
  });
};
