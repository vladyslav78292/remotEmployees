import house1 from "../images/house1.png";
import house2 from "../images/house2.png";
import house3 from "../images/house3.png";
import house4 from "../images/house4.webp";
import house1Owner from "../images/house1Owner.svg";
import house2Owner from "../images/house2Owner.svg";
import house3Owner from "../images/house3Owner.svg";
import house4Owner from "../images/house4Owner.svg";
import fire from "../images/fire.svg";
import house from "../images/houseModal.svg";
import wallet from "../images/Wallet.svg";
import villa1 from "../images/villa1.jpg";
import villa2 from "../images/villa2.jpg";
import villa3 from "../images/villa3.jpg";
import apartments1 from "../images/apartments1.jpg";
import apartments2 from "../images/apartments2.jpg";
import apartments3 from "../images/apartments3.jpg";

export const buildings = [
  {
    type: 'house',
    image: house1,
    title: 'Roselands House',
    price: '$ 35.000.000',
    owner: house1Owner,
    owner_name: 'Dianne Russel',
    owner_location: 'Manchester, Kentucky',
    modal_image: fire,
    modal_text: 'Popular',
    modal_background_c: '#FEE2E2',
    moda_text_c: '#EF4444',
  },
  {
    type: 'house',
    image: house2,
    title: 'Woodlandside',
    price: '$ 20.000.000',
    owner: house2Owner,
    owner_name: 'Robert Fox',
    owner_location: 'Dr. San Jose, South Dakota',
    modal_image: house,
    modal_text: 'New House',
    modal_background_c: '#DBEAFE',
    moda_text_c: '#1D4ED8',
  },
  {
    type: 'house',
    image: house3,
    title: 'The Old Lighthouse',
    price: '$ 44.000.000',
    owner: house3Owner,
    owner_name: 'Ronald richards',
    owner_location: 'Santa Ana, Illinois',
    modal_image: wallet,
    modal_text: 'Best Deals',
    modal_background_c: '#D1FAE5',
    moda_text_c: '#047857',
  },
  {
    type: 'house',
    image: house4,
    title: "Cosmo's House",
    price: '$ 22.000.000',
    owner: house4Owner,
    owner_name: 'Jenny Wilson',
    owner_location: 'Preston Rd. Inglewood, Maine 98380',
    modal_image: fire,
    modal_text: 'Popular',
    modal_background_c: '#FEE2E2',
    moda_text_c: '#EF4444',
  },
  {
    type: 'villa',
    image: villa1,
    title: 'Spanish Villa',
    price: '$ 9.250.000',
    owner: house1Owner,
    owner_name: 'Anna Roll',
    owner_location: 'Barcelona, Spain',
    modal_image: house,
    modal_text: 'New Villa',
    modal_background_c: '#DBEAFE',
    moda_text_c: '#1D4ED8',
  },
  {
    type: 'villa',
    image: villa2,
    title: 'Modern Villa',
    price: '$ 25.000.000',
    owner: house3Owner,
    owner_name: 'Derek Robertino',
    owner_location: 'Lion, France',
    modal_image: wallet,
    modal_text: 'Best Deals',
    modal_background_c: '#D1FAE5',
    moda_text_c: '#047857',
  },
  {
    type: 'villa',
    image: villa3,
    title: 'Italian Villa',
    price: '$ 55.000.000',
    owner: house2Owner,
    owner_name: 'Robert Brown',
    owner_location: 'Palermo, Italy',
    modal_image: fire,
    modal_text: 'Popular',
    modal_background_c: '#FEE2E2',
    moda_text_c: '#EF4444',
  },
  {
    type: 'apartments',
    image: apartments1,
    title: '3-bedrooms Apartments',
    price: '$ 1.200.000',
    owner: house4Owner,
    owner_name: 'Hanna Montana',
    owner_location: 'Kyiv, Ukraine',
    modal_image: house,
    modal_text: 'New Apartments',
    modal_background_c: '#DBEAFE',
    moda_text_c: '#1D4ED8',
  },
  {
    type: 'apartments',
    image: apartments2,
    title: 'Araptments in Kyiv',
    price: '$ 400.000',
    owner: house1Owner,
    owner_name: 'Kate Boyko',
    owner_location: 'Wroclaw, Poland',
    modal_image: fire,
    modal_text: 'Popular',
    modal_background_c: '#FEE2E2',
    moda_text_c: '#EF4444',
  },
  {
    type: 'apartments',
    image: apartments3,
    title: 'Irish Apartments',
    price: '$ 750.000',
    owner: house3Owner,
    owner_name: 'Jackobs Rayn',
    owner_location: 'Dublin, ireland',
    modal_image: wallet,
    modal_text: 'Best Deals',
    modal_background_c: '#D1FAE5',
    moda_text_c: '#047857',
  },
];

