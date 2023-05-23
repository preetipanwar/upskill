import { collections, cardData } from '../../data/zomato';
import Card from './Card';
import Collectioncard from './Collectioncard';
import Collections from './Collections';
import Main from './Main';
import './zomato.css';

export default function Zomato() {
  const cardData = [
    {
      url: 'https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
      tagLine: 'Order Online',
      description: 'Stay home and order to your doorstep',
    },
    {
      url: 'https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
      tagLine: 'Dining',
      description: "View the city's favourite dining venues",
    },
    {
      url: 'https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*',
      tagLine: 'Nightlife and Clubs',
      description: "Explore the city's top nighlife outlets",
    },
  ];

  return (
    <>
      <Main />
      <div className="cardwrapper">
        {cardData.map(function (card) {
          return (
            <Card
              url={card.url}
              tagLine={card.tagLine}
              description={card.description}
            />
          );
        })}
      </div>
      <Collections />
    </>
  );
}
