import React from "react";
import { Link } from "react-router";

const PopularFoods = () => {
  const popularItems = [
    {
      _id: 1,
      img: "https://i.ibb.co.com/YFWQY0Pb/Singara-History.jpg",
      name: "Singara",
      price: 10,
      left: 170,
      total_sold: 42,
    },
    {
      _id: 2,
      img: "https://i.ibb.co.com/XHwsrC6/samosa-165850-1280.jpg",
      name: "Somocha",
      price: 10,
      left: 120,
      total_sold: 30,
    },
    {
      _id: 3,
      img: "https://i.ibb.co.com/XHwsrC6/samosa-165850-1280.jpg",
      name: "Somocha",
      price: 10,
      left: 120,
      total_sold: 30,
    },
    {
      _id: 4,
      img: "https://i.ibb.co.com/XHwsrC6/samosa-165850-1280.jpg",
      name: "Somocha",
      price: 10,
      left: 120,
      total_sold: 30,
    },
  ];

  return (
    <div className="w-11/12 mx-auto lg:p-8 p-3">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
        {popularItems.map(({ _id, img, name, price, left, total_sold }) => (
          <div className="pb-4 bg-gray-200 rounded-t-xl space-y-2" key={_id}>
            <div>
              <img
                src={img}
                className="object-cover overflow-hidden rounded-t-xl"
              />
            </div>
            <div className="flex justify-between px-2 font-semibold">
              <div>{name}</div>
              <div className="text-red-700">{price.toPrecision(3)} Taka</div>
            </div>
            <div className="px-2">
              <p>Available: {left}pcs </p>
              <p>Total sold: {total_sold}pcs</p>
            </div>
            <div className="w-full flex flex-row lg:flex-row md:flex-col gap-2 justify-between px-2">
              <Link to={`/preview/${_id}`} className="bg-red-700 text-white px-6 py-1 rounded-3xl cursor-pointer hover:bg-red-800 active:bg-red-950 duration-200">Details</Link>
              <Link className="bg-red-700 text-white px-6 py-1 rounded-3xl cursor-pointer hover:bg-red-800  active:bg-red-950 duration-200">Order</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularFoods;
