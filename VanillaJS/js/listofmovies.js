const listofmovies = [
  {
    name: "3 idiots",
    director: "rajkumar hirani",
    producer: "vidhu vinod chopra",
    released: "2009",
    imgUrl: "https://250.took.nl/img/posters/large/1187043_large.jpg",
  },
  {
    name: "Udaan",
    director: "Vikramaditya Motwane",
    producer: "anurag kashyap",
    released: "2010",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzgxMzExMzUwNV5BMl5BanBnXkFtZTcwMDc2MjUwNA@@._V1_.jpg",
  },
  {
    name: "gangs of wasseypur",
    director: "anurag kashyap",
    producer: "akfpl",
    released: "2012",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_.jpg",
  },
  {
    name: "Dil chahta hai",
    director: "farhan akhtar",
    producer: "akp",
    released: "2001",
    imgUrl:
      "https://i.pinimg.com/originals/76/b2/45/76b2454bbb7322a76cbf75cfbbce2f5c.jpg",
  },
  {
    name: "Bhag milkha bhaag",
    director: "rajkumar hirani",
    producer: "vidhu vinod chopra",
    released: "2009",
    imgUrl:
      "https://th.bing.com/th/id/R.86a26fa9f023f6cbe11cd69c17781f1b?rik=YKzcPHgPjSEJrw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-k50dUQBnnHk%2fUdPXoQ588kI%2fAAAAAAAADOI%2fV4tSYLqEZDs%2fs867%2fbhaag-milkha-bhaag%2b%252540photo-control.blogspot.com%2b%2525285%252529.jpg&ehk=CHlYbBlXMedrfnRFRfpjBIcP0fmA8%2biMmZuteWKyEgo%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Udaan",
    director: "Vikramaditya Motwane",
    producer: "anurag kashyap",
    released: "2010",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzgxMzExMzUwNV5BMl5BanBnXkFtZTcwMDc2MjUwNA@@._V1_.jpg",
  },
  {
    name: "gangs of wasseypur",
    director: "anurag kashyap",
    producer: "akfpl",
    released: "2012",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_.jpg",
  },
  {
    name: "Dil chahta hai",
    director: "farhan akhtar",
    producer: "akp",
    released: "2001",
    imgUrl:
      "https://i.pinimg.com/originals/76/b2/45/76b2454bbb7322a76cbf75cfbbce2f5c.jpg",
  },
  {
    name: "Bhag milkha bhaag",
    director: "rajkumar hirani",
    producer: "vidhu vinod chopra",
    released: "2009",
    imgUrl:
      "https://th.bing.com/th/id/R.86a26fa9f023f6cbe11cd69c17781f1b?rik=YKzcPHgPjSEJrw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-k50dUQBnnHk%2fUdPXoQ588kI%2fAAAAAAAADOI%2fV4tSYLqEZDs%2fs867%2fbhaag-milkha-bhaag%2b%252540photo-control.blogspot.com%2b%2525285%252529.jpg&ehk=CHlYbBlXMedrfnRFRfpjBIcP0fmA8%2biMmZuteWKyEgo%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "3 idiots",
    director: "rajkumar hirani",
    producer: "vidhu vinod chopra",
    released: "2009",
    imgUrl: "https://250.took.nl/img/posters/large/1187043_large.jpg",
  },
  {
    name: "Udaan",
    director: "Vikramaditya Motwane",
    producer: "anurag kashyap",
    released: "2010",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzgxMzExMzUwNV5BMl5BanBnXkFtZTcwMDc2MjUwNA@@._V1_.jpg",
  },
  {
    name: "gangs of wasseypur",
    director: "anurag kashyap",
    producer: "akfpl",
    released: "2012",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_.jpg",
  },
  {
    name: "Dil chahta hai",
    director: "farhan akhtar",
    producer: "akp",
    released: "2001",
    imgUrl:
      "https://i.pinimg.com/originals/76/b2/45/76b2454bbb7322a76cbf75cfbbce2f5c.jpg",
  },
  {
    name: "3 idiots",
    director: "rajkumar hirani",
    producer: "vidhu vinod chopra",
    released: "2009",
    imgUrl: "https://250.took.nl/img/posters/large/1187043_large.jpg",
  },
  {
    name: "Udaan",
    director: "Vikramaditya Motwane",
    producer: "anurag kashyap",
    released: "2010",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzgxMzExMzUwNV5BMl5BanBnXkFtZTcwMDc2MjUwNA@@._V1_.jpg",
  },
  {
    name: "gangs of wasseypur",
    director: "anurag kashyap",
    producer: "akfpl",
    released: "2012",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_.jpg",
  },
  {
    name: "Bhag milkha bhaag",
    director: "rajkumar hirani",
    producer: "vidhu vinod chopra",
    released: "2009",
    imgUrl:
      "https://th.bing.com/th/id/R.86a26fa9f023f6cbe11cd69c17781f1b?rik=YKzcPHgPjSEJrw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-k50dUQBnnHk%2fUdPXoQ588kI%2fAAAAAAAADOI%2fV4tSYLqEZDs%2fs867%2fbhaag-milkha-bhaag%2b%252540photo-control.blogspot.com%2b%2525285%252529.jpg&ehk=CHlYbBlXMedrfnRFRfpjBIcP0fmA8%2biMmZuteWKyEgo%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Dil chahta hai",
    director: "farhan akhtar",
    producer: "akp",
    released: "2001",
    imgUrl:
      "https://i.pinimg.com/originals/76/b2/45/76b2454bbb7322a76cbf75cfbbce2f5c.jpg",
  },
];
