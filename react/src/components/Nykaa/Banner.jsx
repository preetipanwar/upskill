import { Icon } from 'react-icons-kit';
import {} from 'react-icons-kit/entypo';
import {} from 'react-icons-kit/fa';
import {} from 'react-icons-kit/feather';
import {} from 'react-icons-kit/icomoon';
import {} from 'react-icons-kit/iconic';
import {} from 'react-icons-kit/ikons';
import {} from 'react-icons-kit/ionicons';
import {} from 'react-icons-kit/linea';
import {} from 'react-icons-kit/metrize';
import {} from 'react-icons-kit/noto_emoji_regular';
import {} from 'react-icons-kit/oct';
import {} from 'react-icons-kit/typicons';
import {} from 'react-icons-kit/oct';
import { mobile } from 'react-icons-kit/icomoon';
import { ic_location_on_outline } from 'react-icons-kit/md';
import { ic_card_giftcard } from 'react-icons-kit/md';
import { ic_help_outline_outline } from 'react-icons-kit/md';
import { left } from 'react-icons-kit/entypo';
import { height } from 'react-icons-kit/iconic';

export default function Banner() {
  return (
    <div className="banner">
      <div className="leftbanner">
        <p> BEAUTY BONANZA Get Your Daily Dose Off Amazing Deals</p>
      </div>
      <div className="rightbanner">
        <Icon icon={mobile} style={{}} />
        <a href=""> Get App</a>
        <Icon icon={ic_location_on_outline} style={{}} />
        <a href="">Store & Events</a>
        <Icon icon={ic_card_giftcard} />
        <a href="">Gift Card</a>
        <Icon icon={ic_help_outline_outline} />
        <a href="">Help </a>
      </div>
    </div>
  );
}
