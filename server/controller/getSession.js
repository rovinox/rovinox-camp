const getSession = (request, response) => {
  response.json(request.session.user);
};

module.exports = { getSession };
