import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/HouseItem.module.css';

export const HouseItem = ({ house }) => {
  return (
    <div className={styles.house}>
      <div className={styles.img}>
        <Image
          src={
            house.image
              ? house.image.formats.thumbnail.url
              : '/images/house-default.jpg'
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>{new Date(house.dateAvailable).toLocaleDateString('en-GB')}</span>
        <h3>{house.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/houses/${house.slug}`}>
          <a>Info</a>
        </Link>
      </div>
    </div>
  );
};
