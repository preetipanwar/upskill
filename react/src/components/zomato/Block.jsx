import Smallblock from './Smallblock';
import { block } from '../../data/zomato';

export default function Block() {
  return (
    <>
      <div className="block">
        <p className="tag">Popular localities in and around Delhi NCR</p>
        <div className="multipleblock">
          {block.map(function (b) {
            return <Smallblock heading={b.heading} places={b.places} />;
          })}

          {/* <Smallblock />
          <Smallblock />
          <Smallblock />
          <Smallblock />
          <Smallblock />
          <Smallblock />
          <Smallblock />
          <Smallblock /> */}
        </div>
      </div>
    </>
  );
}
