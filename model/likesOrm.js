const {
    insertLikeQuery,
    findAllLikesQuery,
    deleteLikeByRecipeIdQuery
} = require('./likesQueries');
const connection = require('../config/connection');

const insertLikeToDb = async(recipe_id, user_id) => {
    // going to generate some random String to add on to our hashed password once we start hashing it
    try {
        const [result] = await connection.query(insertLikeQuery, [recipe_id, user_id]);
        const [likesResult] = await connection.query(findAllLikesQuery);
        return likesResult;
    } catch (e) {
        throw new Error(e);
    }
};

const fetchLikes = async() => {
    try {
        const [rows] = await connection.query(findAllLikesQuery);
        return rows;
    } catch (e) {
        throw new Error(e);
    }
};

const deleteLikeByRecipeIdFromDb = async(recipeId) => {
    try {
        // We cant just delete first if we delete first, we can't get the fweet anymore
        // const deleted = await findFweetByIdFromDb(fweetId);
        await connection.query(deleteLikeByRecipeIdQuery, recipeId);
        const likes = await fetchLikes();
        return likes;
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    insertLikeToDb,
    fetchLikes,
    deleteLikeByRecipeIdFromDb
}