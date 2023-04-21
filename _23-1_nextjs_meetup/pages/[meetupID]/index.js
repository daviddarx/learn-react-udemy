import { MongoClient } from 'mongodb';

import MeetupDetail from './../../components/meetups/MeetupDetail';

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      id={props.meetupData.id}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
      image={props.meetupData.image}
    />
  );
};

/**
 * Export of getStaticPaths() is need in all dynamic page components
 * which are using getStaticProps. So that NextJS can export/render all the
 * versions of this page. We have to export all the possible used IDs
 */
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://daviddarx:SGBwPguPLpKuOGcj@cluster0.tlig6oe.mongodb.net/meetups?retryWrites=true&w=majority',
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // first {} would be for filtering

  client.close();

  return {
    // list of all pathes
    paths: meetups.map((meetup) => ({ params: { meetupID: meetup._id.toString() } })),
    /**
     * The fallback indicate if the paths[] contains all the possible id's (false).
     * If true, NextJS will pregenerating the missing ones dynamically when the requests arrive.
     * Very good if we don't want to generate 100 pages, but only the most popular.
     */
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupID = context.params.meetupID;

  const client = await MongoClient.connect(
    'mongodb+srv://daviddarx:SGBwPguPLpKuOGcj@cluster0.tlig6oe.mongodb.net/meetups?retryWrites=true&w=majority',
  );

  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // first {} would be for filtering
  const selectedMeetup = meetups.find((meetup) => meetup._id.toString() === meetupID);
  client.close();

  return {
    props: {
      meetupData: {
        id: meetupID,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image:
          'https://www.zuerich.com/sites/default/files/styles/683_512_focal_scale_crop/public/image/2021/web_zurich_general_key_ZT_21257_1600x900.jpg', //selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetailPage;
