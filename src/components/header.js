import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusTab } from "../stores/cart";
const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();
  // Correct selector
  const carts = useSelector((store) => store.cart.items || []); // Ensure items is defined

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total); // Update totalQuantity after calculating
  }, [carts]); // Depend on `carts`

  const handleOpenTapCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <header className="flex justify-between items-center mb-5">
      <Link to={"/"} className="text-xl font-semibold">
        Home
      </Link>
      <div
        className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative"
        onClick={handleOpenTapCart}
      >
        <img src={iconCart} alt="" className="w-6" />
        <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full justify-center items-center flex">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
