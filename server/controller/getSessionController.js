const jwt = require("jsonwebtoken");

const valid = (req, res) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  console.log("111", token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.email = decoded.UserInfo.email;

    res.json({ login: true });
  });
};

module.exports = { valid };
