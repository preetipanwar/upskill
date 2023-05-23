import Collectioncard from './Collectioncard';
import { collections } from '../../data/zomato';

export default function Collections() {
  console.log('hello');
  return (
    <div>
      <div className="heading">
        <h2>Collections</h2>
        <div className="text">
          <h6>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends{' '}
          </h6>
          <a href=""> All collection in delhi NCR</a>
        </div>
      </div>
      <div className="collection">
        {/* <Collectioncard
          heading={collections[0].heading}
          places={collections[0].places}
        />
        <Collectioncard
          heading={collections[1].heading}
          places={collections[1].places}
        />
        <Collectioncard
          heading={collections[2].heading}
          places={collections[2].places}
        />
        <Collectioncard
          heading={collections[3].heading}
          places={collections[3].places}
        /> */}
        {collections.map(function (collection) {
          return (
            <Collectioncard
              url={collection.url}
              heading={collection.heading}
              places={collection.places}
            />
          );
        })}
      </div>

      <div className="tag">
        <p>Popular localities in and around Delhi NCR</p>
      </div>
    </div>
  );
}
