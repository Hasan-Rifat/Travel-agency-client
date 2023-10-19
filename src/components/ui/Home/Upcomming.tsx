import { Card } from "antd";
import React from "react";

type UpcomingProps = {};

const Upcoming: React.FC<UpcomingProps> = () => {
  return (
    <section className="bg-[#f5f6f6]">
      <div className="container mx-auto p-[50px]">
        <div className="text-center mb-14">
          <h5 className="text-[#808080] font-semibold uppercase text-lg">
            Upcoming Services
          </h5>
          <h4 className="text-[#061a3a] text-6xl font-black "></h4>
        </div>
        <div>
          <Card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default Upcoming;
