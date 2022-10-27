const jwt = require("jsonwebtoken");
const Student = require("../model/student");

const valid = (req, res) => {
  const authHeader2222 = req?.cookies?.jwt;
  console.log("email", req.user);
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const Token = authHeader.split(" ")[1];
  console.log("Token", authHeader);
  console.log(" req.signedCookies", JSON.stringify(req.signedCookies));
  console.log("headers-------------------------------", authHeader2222);
  console.log(
    " req.signedCookies-------------------------------",
    req.signedCookies
  );
  // if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  // const token = authHeader.split(" ")[1];
  //console.log("111", token);
  jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      res.redirect("/login");
    } else {
      res.json({ login: true });
    }
  });
};

module.exports = { valid };
