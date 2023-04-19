import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import CarDetail from '@/components/screens/car-detail/CarDetail';

import { ICarDataSingle } from '@/types/car';
import { CarService } from '@/services/CarService';

interface Params extends ParsedUrlQuery {
  id: string;
}

const CarPage: NextPage<ICarDataSingle> = ({ car }) => {
  return <CarDetail car={car} />;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const cars = await CarService.getAllCars();

  return {
    paths: cars.map((car) => ({
      params: {
        id: car.id.toString(),
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({
  params,
}) => {
  const car = await CarService.getCarById(String(params?.id));

  return {
    props: { car },
    revalidate: 60,
  };
};

export default CarPage;
