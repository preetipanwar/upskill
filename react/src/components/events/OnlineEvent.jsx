import Button from './Button';

export default function OnlineEvent({ url, time, eventName, btnName }) {
  return (
    <div className="eventWrapper">
      <div className="events">
        <img src={url} alt="" />
        <div className="info">
          <p className="time">{time}</p>
          <h4>{eventName}</h4>
          <p>BLACK LGBTIQ SOCIAL GROUP in NEW YORK.</p>
        </div>
      </div>
      <Button btnName={btnName} />
    </div>
  );
}
