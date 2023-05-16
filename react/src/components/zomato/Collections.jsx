import Collectioncard from './Collectioncard';

export default function Collections() {
  return (
    <div>
      <div>
        <h2>Collections</h2>
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Delhi NCR, based on trends <a href=""> All collection in delhi NCR</a>
        </p>
      </div>
      <div className="collection">
        <Collectioncard />
      </div>
    </div>
  );
}
