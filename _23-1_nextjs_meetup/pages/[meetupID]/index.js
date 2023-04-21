import { useRouter } from 'next/router';

import MeetupDetail from './../../components/meetups/MeetupDetail';

const MeetupDetailPage = () => {
  const router = useRouter();

  return (
    <MeetupDetail
      id={router.query.meetupID}
      title='Title'
      address='Zurich'
      description='Meetup description'
      image='https://www.zuerich.com/sites/default/files/styles/683_512_focal_scale_crop/public/image/2021/web_zurich_general_key_ZT_21257_1600x900.jpg'
    />
  );
};

export default MeetupDetailPage;
