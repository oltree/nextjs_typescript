import axios from 'axios';

import { ICar } from '@/types/car';

const API_URL = 'http://localhost:3001';

axios.defaults.baseURL = API_URL;

export const CarService = {
  async getAllCars() {
    const { data } = await axios.get<ICar[]>('/cars');

    return data;
  },

  async getCarById(id: string) {
    const { data } = await axios.get<ICar>(`cars/${id}`);

    return data;
  },
};
