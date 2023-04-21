import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://www.zuerich.com/sites/default/files/styles/683_512_focal_scale_crop/public/image/2021/web_zurich_general_key_ZT_21257_1600x900.jpg?',
    address: 'Zürich',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://www.zuerich.com/sites/default/files/styles/683_512_focal_scale_crop/public/image/2021/web_zurich_general_key_ZT_21257_1600x900.jpg?',
    address: 'Zürich',
    description: 'This is a second meetup',
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>
    </Fragment>
  );
};

export default HomePage;
