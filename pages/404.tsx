import Link from 'next/link';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout title='404 Page not found'>
      <div>
        <h1>404</h1>
        <h4>Sorry the page you tried to found is not here</h4>
        <Link href='/'>
          <a>Go back</a>
        </Link>
      </div>
    </Layout>
  );
};
export default NotFoundPage;
