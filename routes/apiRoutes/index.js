const router = require('express').Router();
const {insertLikesAPI, fetchLikesAPI} = require('../../controllers/likesController')
router.get("/likes", fetchLikesAPI)
router.post("/like", insertLikesAPI)
// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

module.exports = router;
