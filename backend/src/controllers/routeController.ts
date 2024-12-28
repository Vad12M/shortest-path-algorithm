import { Request, Response } from 'express';
import { calculateShortestPath } from '../services/pathService';
import { Point } from '../types';

export const findShortestPath = (req: Request, res: Response): Response => {
    try {
        const { grid, start, end } = req.body;

        if (!grid || !start || !end) {
            return res.status(400).json({ error: 'Invalid input data' });
        }

        const shortestPath = calculateShortestPath(grid, start as Point, end as Point);
        return res.json({ shortestPath });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}
