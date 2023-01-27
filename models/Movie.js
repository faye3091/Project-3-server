const { Schema } = require('mongoose');

const movieSchema = new Schema({
  movieId: {
    type: String,
    required: true,
    unique: true,
  },
  movieTitle: {
    type: String,
    required: true,
  },
  movieImage: {
    type: String,
    required: true,
  }
});

module.exports = movieSchema;