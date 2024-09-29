import React, { useEffect, useState } from "react";
import { products } from "../Data/product";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";
const CartItem = ({ data }) => {
  const { productId, quantity } = data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    if (quantity < 5) {
      dispatch(
        changeQuantity({
          productId: productId,
          quantity: quantity + 1,
        })
      );
    }
  };
  return (
    <div className="flex justify-between items-center mb-1 bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt="" className="w-12" />
      <h3 className="">{detail.name}</h3>
      <p>${detail.price * quantity} </p>
      <div className="w-20 flex justify-between gap-2">
        <button
          onClick={handleMinusQuantity}
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
        >
          -
        </button>
        <span className="">{quantity}</span>
        <button
          onClick={handlePlusQuantity}
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
