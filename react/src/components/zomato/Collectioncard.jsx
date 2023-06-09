export default function Collectioncard({ url, heading, places }) {
  return (
    <div
      className="collectioncard"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="collectioncardheading">
        <p>{heading}</p>
        <p>{places}</p>
      </div>
    </div>
  );
}
