import { useRouter } from 'next/router';

import NewMeetupForm from './../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();

  const onAddMeetupHandler = async (meetupData) => {
    console.log(meetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meetupData),
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetupPage;
