const router = require("express").Router();
const services = require("../../services");

router.post("/", async (req, res) => {
  try {
    let repos = await services.reposServices.searchRepos(req.body);
    res.send(repos);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
