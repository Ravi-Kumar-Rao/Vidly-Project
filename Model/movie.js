const mongoose = require('mongoose');
const Joi = require('joi');
const {genreSchema} = require('./genre')

const Movie = mongoose.model('Movie', new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 5,
        maxlength:50 
    },
    genre:{
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
  }));

  function validateMovies(movie) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      genreId:Joi.Array().required(),
      numberInStock: Joi.Number().min(0).required(),
      dailyRentalRate:Joi.Number().min(0).required()
    };
  
    return Joi.validate(movie, schema);
  }

  exports.Movies = Movie;
  exports.validate = validateMovies;