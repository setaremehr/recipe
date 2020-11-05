// const findAllRecipes = "SELECT id, recipe FROM "
// const findRecipeByIdQuery = 
// const favoriteRecipeByIdQuery =
// const deleteUserByIdQuery = 

const insertRecipeQuery = 'INSERT INTO recipes (recipe, title, img, ingredient) VALUES (?, ?, ?, ?);';
const findAllRecipeQuery = 'SELECT * FROM recipes;';
const findRecipeByIdQuery = 'SELECT * FROM recipes WHERE id = ?;';
// const findFweetsByUserQuery = 'SELECT * FROM fweets WHERE userId = ?;';
const deleteRecipeByIdQuery = 'DELETE FROM recipes WHERE id = ?;';


module.exports = {
  insertRecipeQuery,
  findAllRecipeQuery,
  findRecipeByIdQuery,
//   findFweetsByUserQuery,
  deleteRecipeByIdQuery,
}
