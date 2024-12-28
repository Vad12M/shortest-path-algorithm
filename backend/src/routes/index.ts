import { Router, Request, Response } from 'express';
import { findShortestPath } from '../controllers/routeController';

const router = Router();

router.post('/shortest-path', (req: Request, res: Response) => {
    findShortestPath(req, res);
});

export default router;
