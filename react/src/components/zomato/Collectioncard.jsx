export default function Collectioncard({ heading, places }) {
  return (
    <div className="collectioncard">
      <div className="block">
        <p>{heading}</p>
        <p>{places}</p>
      </div>
    </div>
  );
}
