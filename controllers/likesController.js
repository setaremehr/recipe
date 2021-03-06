const {
    insertLikeToDb,
    fetchLikes,
    deleteLikeByRecipeIdFromDb
} = require('../model/likesOrm');

const insertLikesAPI = async(req, res) => {
    const { recipe_id, user_id } = req.body
    const results = await insertLikeToDb(recipe_id, user_id)
    res.json(results)
}

const fetchLikesAPI = async(req, res) => {
    const results = await fetchLikes()
    res.json(results)
}

const deleteLikesAPI = async(req, res) => {
    const { recipe_id, user_id } = req.body
    const results = await deleteLikeByRecipeIdFromDb(recipe_id)
    res.json(results)
}

module.exports = {
    insertLikesAPI,
    fetchLikesAPI,
    deleteLikesAPI
};