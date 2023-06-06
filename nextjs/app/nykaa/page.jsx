import Banner from './Banner';

import Category from './Category';
import Header from './Header';
import Menubar from './Menubar';
import Scrollbar from './Scrollbar';
import './nykaa.css';
import Wrapper from './Wrapper';
import Caro from './Caro';
import Beauty from './Beauty';

export default function Nykaa() {
  return (
    <div>
      <Header />
      <Beauty />
      <Caro />
    </div>
  );
}
