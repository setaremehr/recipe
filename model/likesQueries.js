// const findAllRecipes = "SELECT id, recipe FROM "
// const findRecipeByIdQuery = 
// const favoriteRecipeByIdQuery =
// const deleteUserByIdQuery = 

const insertLikeQuery = 'INSERT INTO likes (recipe_id, user_id) VALUES (?, ?);';
const findAllLikesQuery = 'SELECT * FROM likes;';
// const findRecipeByIdQuery = 'SELECT * FROM recipes WHERE id = ?;';
// const findFweetsByUserQuery = 'SELECT * FROM fweets WHERE userId = ?;';
const deleteLikeByRecipeIdQuery = 'DELETE FROM likes WHERE recipe_id = ?;';


module.exports = {
    insertLikeQuery,
    findAllLikesQuery,
    deleteLikeByRecipeIdQuery
}