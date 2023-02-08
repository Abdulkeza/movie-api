import { Router } from "express";

import { httpCreateMovie, httpGetMovie } from "../controllers/movie.controller.js";
import isValid from "../middleware/movimiddleware.js";

const router = Router()

router.post('/', isValid, httpCreateMovie);
router.get('/', httpGetMovie)


export default router;