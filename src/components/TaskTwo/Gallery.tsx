import React, { FC } from "react";
import GoodsCard from "./GoodsCard";
import Beet from "../../SVGS/Beet";
import Cabbage from "../../SVGS/Cabbage";
import Celery from "../../SVGS/Celery";
import Cheese from "../../SVGS/Cheese";
import Cherry from "../../SVGS/Cherry";
import Hazelnut from "../../SVGS/Hazelnut";
import Pear from "../../SVGS/Pear";
import Peas from "../../SVGS/Peas";

const Gallery: FC = () => {
  const goodsData = [
    { id: 1, name: "Beet", price: 20, img: Beet },
    { id: 2, name: "Cabbage", price: 30, img: Cabbage },
    { id: 3, name: "Celery", price: 25, img: Celery },
    { id: 4, name: "Cheese", price: 40, img: Cheese },
    { id: 5, name: "Cherry", price: 15, img: Cherry },
    { id: 6, name: "Hazelnut", price: 50, img: Hazelnut },
    { id: 6, name: "Pear", price: 50, img: Pear },
    { id: 6, name: "Peas", price: 50, img: Peas },
  ];
  return (
    <div className={"gallery"}>
      {goodsData.map((item) => (
        <GoodsCard
          key={item.id}
          name={item.name}
          price={item.price}
          component={item.img}
        />
      ))}
    </div>
  );
};

export default Gallery;
