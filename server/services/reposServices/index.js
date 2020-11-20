const Repos = require("../../../database/models/repos.js");
const getRepos = require("../../../helpers/github.js");
module.exports = {
  saveRepos(repos) {
    return Repos.create(repos);
  },
  searchRepos(term) {
    return getRepos.getReposByUsername(term);
  },
};
