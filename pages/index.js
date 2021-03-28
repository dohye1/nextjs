import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const ProfileLink = (props) => {
  return (
    <div>
      <Link href='/p/[profile]' as={`/p/${props.profile}`}>
        <a>Go to {props.name}'s profile</a>
      </Link>
    </div>
  );
};
const Index = () => {
  return (
    <Layout>
      <h1>Friends List</h1>
    </Layout>
  );
};

// 여기서부터 하면됨 : 무료 api 찾기
/*Index.getInitialProps = async function () {
  const res = await fetch('https://uinames.com/api/?amount=10');
  const data = await res.json();

  return {
    profiles: data.map((profile) => profile.name)
  };
};*/
export default Index;
