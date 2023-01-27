const { Schema } = require('mongoose');

const Movie = new Schema({
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

module.exports = Movie;