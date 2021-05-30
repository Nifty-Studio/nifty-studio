import avatarPoster from '../../assets/avatar.jpg';
import titanicPoster from '../../assets/titanic.jpg';

const SHOP_DATA = [
  {
    id: 1,
    title: "Current Productions",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Avatar",
        imageUrl: avatarPoster,
        price: "5.59 ETH"
      },
      {
        id: 2,
        name: "Titanic",
        imageUrl: titanicPoster,
        price: "5.59 ETH"
      }
    ]
  }
];

export default SHOP_DATA;

