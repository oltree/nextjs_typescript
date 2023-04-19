import axios from 'axios';

import { ICar } from '@/types/car';

axios.defaults.baseURL = process.env.API_URL;

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
