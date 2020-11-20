const axios = require("axios");
require("dotenv").config();

let getReposByUsername = async (term) => {
  let options = {
    url: `https://api.github.com/users/${term.term}/repos`,
    profileURL: `https://api.github.com/users/${term.term}`,
    headers: {
      Authorization: `token ${process.env.TOKEN}`,
    },
  };
  let user = await axios
    .get(options.profileURL, options.headers)
    .then((profile) => {
      return profile;
    });
  let repos = await axios.get(options.url, options.headers);
  return { repos: repos.data, user: user.data };
};

module.exports.getReposByUsername = getReposByUsername;
