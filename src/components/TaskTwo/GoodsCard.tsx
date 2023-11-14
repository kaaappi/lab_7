import React, { FC } from "react";

interface IGoodsCardProps {
  name: string;
  price: number;
  component: React.ComponentType<any>;
}

const GoodsCard: FC<IGoodsCardProps> = ({
  name,
  price,
  component: RenderComponent,
}) => {
  return (
    <div className={"good__style"}>
      <RenderComponent />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default GoodsCard;
