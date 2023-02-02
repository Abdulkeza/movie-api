import { Router } from "express";

import { httpCreateMovie } from "../controllers/movie.controller.js";
import isValid from "../middleware/movimiddleware.js";

const router = Router()

router.post('/', isValid, httpCreateMovie);


export default router;