import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();

  return (
    <Layout>
      <p>Hello, my name is {router.query.profile}</p>
    </Layout>
  );
}
