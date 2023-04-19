import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Car from '@/components/ui/car/Car';

import { ICarData } from '@/types/car';

import styles from './Home.module.scss';

const Home: FC<ICarData> = ({ cars }) => {
  return (
    <Layout title="Home page">
      <h1>Hello world</h1>

      {cars.length > 0 ? (
        cars.map((car) => (
          <Car
            key={car.id}
            car={car}
          />
        ))
      ) : (
        <div>Cars not fround!</div>
      )}
    </Layout>
  );
};

export default Home;
