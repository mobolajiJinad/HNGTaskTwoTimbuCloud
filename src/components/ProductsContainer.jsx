import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "./CartContext";

import Star from "../assets/Star.svg";
import Hearts from "../assets/Hearts.svg";

const ProductsContainer = ({ products }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {products.map((product) => (
        <div
          className="flex w-full max-w-xs flex-col items-center rounded-3xl border border-gray-300 p-4 shadow-lg transition-transform hover:scale-105 sm:max-w-sm"
          key={product.id}
        >
          <img
            src={Hearts}
            alt=""
            className="h-8 w-8 cursor-pointer self-end"
          />

          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-40 object-contain sm:h-36 sm:w-36"
            onClick={() => navigate(`/${product.id}`)}
          />

          <div className="my-2 flex">
            {Array.from({ length: product.star }, (_, index) => (
              <img src={Star} alt="Star" key={index} className="h-4 w-4" />
            ))}
          </div>

          <h4 className="my-2 text-center text-sm font-semibold text-gray-800 sm:text-lg">
            {product.name}
          </h4>

          <span className="my-1 text-sm font-semibold text-gray-600 sm:text-lg">
            ${product.price}
          </span>

          <button
            className="my-2 rounded-xl bg-dark-cyan p-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700 sm:px-4"
            onClick={() => addToCart({ ...product, quantity: 1 })}
          >
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductsContainer;
