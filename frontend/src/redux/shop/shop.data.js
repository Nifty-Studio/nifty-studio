import avatarPoster from '../../assets/avatar.jpg';
import titanicPoster from '../../assets/titanic.jpg';
import avatarScript from '../../assets/avatar.pdf';
import titanicScript from '../../assets/titanic.pdf';

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
        price: "215.59 ETH",
        director: "James Cameron",
        writer: "James Cameron",
        writerAddress: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
        directorAddress: "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
        script: avatarScript
      },
      {
        id: 2,
        name: "Titanic",
        imageUrl: titanicPoster,
        price: "118.33 ETH",
        director: "James Cameron",
        writer: "James Cameron",
        writerAddress: "0x15d34aaf54267db7d7c367839aaf71a00a2c6a65",
        directorAddress: "0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc",
        script: titanicScript
      }
    ]
  }
];

export default SHOP_DATA;

