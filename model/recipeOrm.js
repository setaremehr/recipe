const bcrypt = require('bcryptjs');
const {
  findAllRecipes,
  findRecipeByIdQuery,
  favoriteRecipeByIdQuery,
  deleteUserByIdQuery,
} = require('./recipeQueries');
const connection = require('../config/connection');