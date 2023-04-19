import { FC } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/layout/Layout';
import Car from '@/components/ui/car/Car';

import { ICarDataSingle } from '@/types/car';

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
  const { replace } = useRouter();

  return (
    <Layout
      title={car.name}
      description="Good car"
    >
      <Car car={car} />
      <button onClick={() => replace('/')}>back</button>
    </Layout>
  );
};

export default CarDetail;
