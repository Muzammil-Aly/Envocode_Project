import React from "react";
import Slider from "react-slick";
import "./Sliderr.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientsLogo = [
  {
    id: 1,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/Abbasi-Company-client.webp",
  },
  {
    id: 2,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/Al-Gohar-Education-Client.webp",
  },
  {
    id: 3,
    imgUrl: "https://envocode.com/wp-content/uploads/2024/01/botal-client.webp",
  },
  {
    id: 4,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/Citropak-client.webp",
  },
  {
    id: 5,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/Dry-Fruit-Mart-client.webp",
  },
  {
    id: 6,
    imgUrl: "https://envocode.com/wp-content/uploads/2024/01/Focus-client.webp",
  },
  {
    id: 7,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/Fruitien-joy-client.webp",
  },
  {
    id: 8,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/happyzone-Client.webp",
  },
  {
    id: 9,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/mast-fm-103-client.webp",
  },
  {
    id: 10,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/MeRise-Client.webp",
  },
  {
    id: 11,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/MFR-Marketing-client-e1706854016960.webp",
  },
  {
    id: 12,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/Rockandroll-juice-client.webp",
  },
  {
    id: 13,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/Splinter-hub-Technologies-client.webp",
  },
  {
    id: 14,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/01/uppal-cosmetics-client.webp",
  },
  {
    id: 15,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/02/amyzone-client.webp",
  },

  {
    id: 17,
    imgUrl:
      "https://envocode.com/wp-content/uploads/2024/02/motor-36-logo-client.webp",
  },
];

const Sliderr = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {clientsLogo.map((logo) => (
        <div key={logo.id} className="logo-slide">
          <img src={logo.imgUrl} alt={`Logo ${logo.id}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Sliderr;
