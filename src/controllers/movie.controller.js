import Movie from "../models/Movie.js";

const httpCreateMovie = async (req, res) => {

  try {
    const movie = new Movie(req.body);
    await movie.save();

    return res.status(201).json({
      success: true,
      message: "movie create succefully",
      movie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while creating a movie!",
      error: error.message,
    });
  }
};

export { httpCreateMovie };
