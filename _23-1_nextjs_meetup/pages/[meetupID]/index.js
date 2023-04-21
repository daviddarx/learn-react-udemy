import MeetupDetail from './../../components/meetups/MeetupDetail';

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      id={props.id}
      title={props.title}
      address={props.address}
      description={props.description}
      image={props.image}
    />
  );
};

/**
 * Export of getStaticPaths() is need in all dynamic page components
 * which are using getStaticProps. So that NextJS can export/render all the
 * versions of this page. We have to export all the possible used IDs
 */
export async function getStaticPaths() {
  return {
    // list of all pathes
    paths: [
      {
        params: { meetupID: 'm1' },
      },
      {
        params: { meetupID: 'm2' },
      },
    ],
    /**
     * The fallback indicate if the paths[] contains all the possible id's (false).
     * If true, NextJS will pregenerating the missing ones dynamically when the requests arrive.
     * Very good if we don't want to generate 100 pages, but only the most popular.
     */
    fallback: false,
  };
}

export function getStaticProps(context) {
  const meetupID = context.params.meetupID;

  console.log(meetupID);

  return {
    props: {
      id: meetupID,
      title: 'Title',
      address: 'Zurich',
      description: 'Meetup description',
      image:
        'https://www.zuerich.com/sites/default/files/styles/683_512_focal_scale_crop/public/image/2021/web_zurich_general_key_ZT_21257_1600x900.jpg',
    },
    revalidate: 10,
  };
}

export default MeetupDetailPage;
