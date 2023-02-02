import { Router } from "express";

import movieRouter from './movie.router.js'



const apiRouter = Router();

apiRouter.use('/movies', movieRouter);

export default apiRouter;