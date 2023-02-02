import mongoose from "mongoose";

const schema = mongoose.Schema;

const MovieSchema = new schema(
  {
    title: {
      type: String,
      require: true,
    },
    director: {
      type: String,
      require: true,
    },
    summary: {
      type: String,
    },
  },
  { timestamps: true 
});

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
