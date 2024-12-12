import axios from 'axios';

const API_URL = 'https://localhost:7087/api/breeds'; // Backend URL

export interface PaginatedResponse<T> {
  totalItems: number;
  pageNumber: number;
  pageSize: number;
  items: T[];
}

export interface Breed {
  id: number;
  name: string;
  description: string;
  lifeSpanMin: number;
  lifeSpanMax: number;
  maleWeightMin: number;
  maleWeightMax: number;
  femaleWeightMin: number;
  femaleWeightMax: number;
  hypoallergenic: boolean;
}

// Fetch paginated breeds
export const fetchPaginatedBreeds = async (pageNumber: number, pageSize: number): Promise<PaginatedResponse<Breed>> => {
  const response = await axios.get<PaginatedResponse<Breed>>(API_URL, {
    params: { pageNumber, pageSize },
  });
  return response.data;
};
