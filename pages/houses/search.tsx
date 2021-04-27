import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import qs from 'qs';
import { useRouter } from 'next/router';

import { API_URL } from '../../config';
import Layout from '../../components/Layout';
import { HouseItem } from '../../components/HouseItem';
import { HouseProps } from '../../interfaces/interface';
import Link from 'next/link';

interface Props {
  houses: HouseProps[];
}

export default function SearchPage({ houses }: Props) {
  const router = useRouter();
  return (
    <Layout title='areHouse | find place to rent'>
      <Link href='/houses'>Back to houses</Link>
      <h1>Searches for {router.query.term}</h1>
      {houses.length === 0 && <h3>No houses available to rent</h3>}

      {houses.map((house: any) => (
        <HouseItem key={house.id} house={house} />
      ))}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { city_contains: term },
        { address_contains: term },
        { county_contains: term },
        { bedrooms_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/homes?${query}`);
  const houses = await res.json();

  return {
    props: {
      houses,
    },
  };
};
