import { ic_shopping_bag_outline } from 'react-icons-kit/md';

export default function Category() {
  return (
    <div className="category">
      <img
        src="https://images.assettype.com/afaqs%2F2020-06%2Fe58cd071-0f27-4002-ba7a-14a60cca9a3c%2Fnykaa.png?w=1200&auto=format%2Ccompress&ogImage=true"
        alt=""
      />
      <ul className="list">
        <li>
          <a href=""> Categories</a>
        </li>
        <li>
          <a href="">Brands</a>
        </li>
        <li>
          <a href="">Luxe</a>
        </li>
        <li>
          <a href="">Nykaa Fashion</a>
        </li>
        <li>
          <a href="">Beauty Advice</a>
        </li>
      </ul>
      <div className="searchbar">
        <input type="search" placeholder="Search on Nykaa" />
        <button>sign in</button>
        {/* <Icon icon={ic_shopping_bag_outline} /> */}
      </div>
    </div>
  );
}
