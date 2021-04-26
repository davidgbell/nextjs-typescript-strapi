import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { API_URL } from '../../config';
import Link from 'next/link';

const housePage = ({ house }) => {
  const deleteHouse = () => console.log(`delete ${house.name}`);

  return (
    <Layout title='House 1'>
      <div>
        {house > 0 && (
          <div>
            <Link href={`/houses/edit/${house.id}`}>
              <a>Edit</a>
            </Link>
            <a href='#' onClick={deleteHouse}>
              Delete
            </a>
          </div>
        )}
        {house.image && (
          <Image
            src={
              house.image
                ? house.image.formats.medium.url
                : '/images/house-default.jpg'
            }
            width={960}
            height={600}
          />
        )}

        <h1>{house.name}</h1>
        <span>
          {house.bedrooms} {house.bedrooms > 1 ? 'bedrooms' : 'bedroom'}
        </span>
        <h3>Description:</h3>
        <p>{house.description}</p>
        <h3>City:</h3>
        <p>{house.city}</p>
        <h3>County:</h3>
        <p>{house.county}</p>
        <h3>Address:</h3>
        <p>{house.address}</p>
        <p>
          Available: {new Date(house.dateAvailable).toLocaleDateString('en-GB')}
        </p>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/homes`);

  const houses = await res.json();

  const paths = houses.map((house: any) => ({
    params: { slug: house.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(`${API_URL}/homes?slug=${slug}`);

  const house = await res.json();

  return {
    props: {
      house: house[0],
      revalidate: 1,
    },
  };
};

export default housePage;
