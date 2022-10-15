const Student = require("../model/student");

const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  // const cookies = req.cookies;
  // if (!cookies?.jwt) return res.sendStatus(204); //No content
  //const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  // const foundUser = await Student.findOne({ refreshToken }).exec();
  // if (!foundUser) {
  //   res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  //   return res.sendStatus(204);
  // }

  // Delete refreshToken in db
  // foundUser.refreshToken = "";
  // const result = await foundUser.save();
  // console.log(result);
  console.log("from logoyr ");

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.status(204).json({ login: false });
};

module.exports = { handleLogout };
