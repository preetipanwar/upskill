export default function Card({ url, tagLine, description }) {
  return (
    <div className="cards">
      <div className="imgwrapper">
        <img src={url} alt="" />
      </div>
      <div className="card-text">
        <h5>{tagLine}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
