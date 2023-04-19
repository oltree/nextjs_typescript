import { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/Home';

import { ICarData } from '@/types/car';
import { CarService } from '@/services/CarService';

const HomePage: NextPage<ICarData> = ({ cars }) => {
  return (
    <>
      <Home cars={cars} />
    </>
  );
};

export const getStaticProps: GetStaticProps<ICarData> = async () => {
  const cars = await CarService.getAllCars();

  return {
    props: { cars },
    revalidate: 60,
  };
};

export default HomePage;
