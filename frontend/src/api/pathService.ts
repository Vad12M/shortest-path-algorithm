import axios from 'axios';

export const fetchShortestPath = async (
  grid: string[],
  start: { x: number; y: number },
  end: { x: number; y: number }
): Promise<any[]> => {
  try {
    const response = await axios.post('http://localhost:5001/api/shortest-path', {
      grid,
      start,
      end,
    });
    return response.data.shortestPath;
  } catch (error) {
    console.error('Error fetching shortest path:', error);
    throw error;
  }
};
