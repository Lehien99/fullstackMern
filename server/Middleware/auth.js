const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const bearerToken = req.get("Authorization");
  const token = bearerToken.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access Token not Found" });
  }

  try {

    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.userID = decoded.id;
    next();

  } catch (error) {

    console.log(error);
    return res
      .status(403)
      .json({ success: false, message: "Invalid Access Token" });

  }
};

module.exports = verifyToken;
