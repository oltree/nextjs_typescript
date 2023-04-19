import { FC, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ICarDataSingle } from '@/types/car';

import styles from './Car.module.scss';

const Car: FC<ICarDataSingle> = ({ car }) => (
  <div className={styles.car}>
    <Image
      src={car.image}
      alt={car.name}
      width={250}
      height={150}
    />
    <h2>{car.name}</h2>
    <small>{car.price}</small>
    <Link href={`/car/${car.id}`}> Read more</Link>
  </div>
);

export default memo(Car);
