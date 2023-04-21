import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  return <p>I am the news detail page: {router.query.newsId}</p>;
};

export default DetailPage;
