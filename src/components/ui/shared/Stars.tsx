import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

type StartsProps = {
  value: number;
  data?: number;
};

const Starts: React.FC<StartsProps> = ({ value, data }) => {
  const ratingStart = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <div key={index}>
        {value >= index + 1 ? (
          <IoIosStar className="text-[#FFB340]" size={data ? data : 20} />
        ) : value >= number ? (
          <IoIosStarHalf size={data ? data : 20} className="text-[#FFB340]" />
        ) : (
          <IoIosStarOutline
            size={data ? data : 20}
            className="text-[#FFB340]"
          />
        )}
      </div>
    );
  });
  return <div className="flex gap-[2px]">{ratingStart}</div>;
};
export default Starts;
