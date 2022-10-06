const jwt = require("jsonwebtoken");

const valid = (req, res) => {
  const authHeader2222 = req.headers.jwt;
  console.log("email", req.body.email);
  const authHeader = req.headers.authorization || req.headers.Authorization;
  console.log("Token", authHeader);
  console.log("headers", JSON.stringify(req.headers));
  console.log("headers-------------------------------", authHeader2222);
  // if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  // const token = authHeader.split(" ")[1];
  //console.log("111", token);
  jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.body.email = decoded.UserInfo.email;

    res.json({ login: true });
  });
};

module.exports = { valid };
