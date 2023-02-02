import validateMovie from "../validations/movie.js";

const isValid = (req, res, next) =>{
    const { error } = validateMovie(req.body);

    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        next()
    } catch (error) {
        console.log("went wrong!");
    }
}

export default isValid;