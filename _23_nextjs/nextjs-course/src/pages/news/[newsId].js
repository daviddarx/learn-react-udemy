import { Fragment } from 'react';
import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <h1>News detail: {router.query.newsId}</h1>
    </Fragment>
  );
};

export default DetailPage;
