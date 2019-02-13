var connection = require("./../config");
module.exports.getallusers = function(req, res) {
  connection.query("SELECT * FROM userinfo ", function(error, results, fields) {
    if (error) throw error;
    return res.send({ data: results, message: "User list." });
  });
};
