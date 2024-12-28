import { Point } from '../types';

export const calculateShortestPath = (grid: string[], start: Point, end: Point): Point[] => {
    const directions = [
        { x: 0, y: 1 },  // right
        { x: 1, y: 0 },  // down
        { x: 0, y: -1 }, // left
        { x: -1, y: 0 }, // up
        { x: 1, y: 1 },  // bottom right
        { x: 1, y: -1 }, // bottom left
        { x: -1, y: 1 }, // top right
        { x: -1, y: -1 } // top left
    ];

    const numRows = grid.length;
    const numCols = grid[0].length;

    const isValid = (x: number, y: number): boolean => {
        return (
            x >= 0 &&
            x < numRows &&
            y >= 0 &&
            y < numCols &&
            grid[x][y].toLowerCase() !== 'x'
        );
    };

    const visited = new Set<string>();
    const queue: { point: Point; path: Point[] }[] = [];

    queue.push({ point: start, path: [start] });
    visited.add(`${start.x},${start.y}`);

    while (queue.length > 0) {
        const { point, path } = queue.shift()!;

        if (point.x === end.x && point.y === end.y) {
            return path;
        }

        for (const dir of directions) {
            let newX = point.x + dir.x;
            let newY = point.y + dir.y;

            while (isValid(newX, newY) && !visited.has(`${newX},${newY}`)) {
                visited.add(`${newX},${newY}`);
                queue.push({
                    point: { x: newX, y: newY },
                    path: [...path, { x: newX, y: newY }]
                });

                if (newX === end.x && newY === end.y) {
                    return [...path, { x: newX, y: newY }];
                }

                newX += dir.x;
                newY += dir.y;
            }
        }
    }

    return [];
};
