import React, { FC } from "react";

interface IOne {
  className?: string;
}

const One: FC<IOne> = ({ className }) => {
  return (
    <svg
      className={className}
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.9805 17H13.9561V7.0332H13.7441L9.62207 8.50977V10.1162L11.9805 9.38477V17Z" />
    </svg>
  );
};

export default One;
