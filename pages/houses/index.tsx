import { GetStaticProps, InferGetServerSidePropsType } from 'next';

import { API_URL } from '../../config';
import Layout from '../../components/Layout';
import { HouseItem } from '../../components/HouseItem';

export default function HousesPage({
  houses,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  console.log(houses);
  return (
    <Layout title='areHouse | find place to rent'>
      <main>
        <h1>Places available for rent</h1>
        {houses.length === 0 && <h3>No houses available to rent</h3>}

        {houses.map((house: any) => (
          <HouseItem key={house.id} house={house} />
        ))}
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/houses`);
  const houses = await res.json();

  return {
    props: {
      houses,
      revalidate: 1,
    },
  };
};
