// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Smallblock({ heading, places }) {
  return (
    <div className="smallblock">
      <div className="box1">
        <h5>{heading}</h5>
        <p>{places}</p>
      </div>
      <div className="box2">
        {/* <FontAwesomeIcon icon={faAngleRight} /> */}
      </div>
    </div>
  );
}
