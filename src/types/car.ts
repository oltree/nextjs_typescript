export type ICar = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export interface ICarDataSingle {
  car: ICar;
}

export interface ICarData {
  cars: ICar[];
}
