const bcrypt = require("bcrypt");
const Student = require("../model/student");
const login = async (request, response) => {
  const { email, password } = request.body;
  const foundUser = await Student.find((person) => person.email === email);
  if (!foundUser) {
    response.status(401).json("Incorrect username or password");
  } else {
    const authenticated = await bcrypt.compareSync(
      password,
      foundUser.password
    );
    if (!authenticated) {
      response.status(401).json("Incorrect username or password");
    } else {
      request.session.user = {
        user_id: foundUser._id,
      };
      response.json(request.session.user);
    }
  }
};
module.exports = {
  login,
};
