import OnlineEvent from './OnlineEvent';
import './events.css';

export default function Events() {
  return (
    <>
      <main>
        <OnlineEvent
          btnName={'Boost your career'}
          eventName={'BLACK LGBTIQ SOCIAL GROUP in NEW YORK. MEET and GREET.'}
          time={'FRI MAY 12 - 4:30 AM'}
          url={
            'https://secure-content.meetupstatic.com/images/classic-events/512043664/530x298.webp'
          }
        />
        <OnlineEvent
          btnName={'lets do it'}
          eventName={'WHITE LGBTIQ SOCIAL GROUP in NEW YORK. MEET and GREET.'}
          time={'SAT MAY 13 - 7:30 AM'}
          url={
            'https://secure-content.meetupstatic.com/images/classic-events/512711005/530x298.webp'
          }
        />
        x
        <OnlineEvent
          btnName={'wow factor'}
          eventName={'BROWN LGBTIQ SOCIAL GROUP in NEW YORK. MEET and GREET.'}
          time={'SUN MAY 14 - 5:30 AM'}
          url={
            'https://secure-content.meetupstatic.com/images/classic-events/512664045/530x298.webp'
          }
        />
      </main>
    </>
  );
}
