const logout = (request, response) => {
  request.session.destroy();
  response.json(request.session);
};
module.exports = { logout };
