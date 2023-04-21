import { MongoClient } from 'mongodb';

import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <Fragment>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};

// SSR SERVER SIDE RENDERING
// export async function getServerSideProps(context) {
//   const request = context.req;
//   const response = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// SSG STATIC SITE GENERATION
// ISG INCREMENTAL STATIC GENERATIOn
export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://daviddarx:SGBwPguPLpKuOGcj@cluster0.tlig6oe.mongodb.net/meetups?retryWrites=true&w=majority',
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // interval in second, for NextJS to regenerate the content
  };
}

export default HomePage;
