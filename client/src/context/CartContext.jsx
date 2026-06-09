import {
  createContext,
  useState,
} from "react";

export const CartContext =
  createContext();

export default function CartProvider({
  children,
}) {
  const [cart, setCart] =
    useState([]);

  const addToCart = (product) => {
    const existing =
      cart.find(
        (item) =>
          item.name === product.name
      );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQty = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (name) => {
    setCart(
      cart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  const removeFromCart = (
    name
  ) => {
    setCart(
      cart.filter(
        (item) =>
          item.name !== name
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}