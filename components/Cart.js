import { useStateContext } from "../lib/context";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import CartItem from "./CartItem";
function Cart() {
  const { cartItems, showCart, setShowCart, qty, onAdd, onRemove } =
    useStateContext();
  const toggleCart = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setShowCart(false);
      document.body.style.overflow = "auto";
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => toggleCart(e)}
      className=" fixed right-0 left-0 h-screen bottom-0 w-full overflow-y-hidden z-30 bg-[#00000081] flex justify-end backdrop"
    >
      <motion.div
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        exit={{ x: 600 }}
        transition={{ duration: 0.2 }}
        layout
        className="w-[40%] bg-[#f1f1f1] p-[2rem_3rem] overflow-y-scroll relative"
      >
        {cartItems.length === 0 && (
          <div className="w-full h-[90%] flex justify-center items-center">
            <h1>No items in cart.</h1>
          </div>
        )}
        <div className="">
          <AnimatePresence>
            {cartItems.map((e) => {
              return (
                <CartItem
                  key={e.slug}
                  image={e.image.data.attributes.formats.thumbnail.url}
                  title={e.title}
                  price={e.price}
                  quantity={e.quantity}
                  product={e}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Cart;
