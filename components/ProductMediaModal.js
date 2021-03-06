import { motion } from "framer-motion";
import { useStateContext } from "../lib/context";
function ProductMediaModal() {
  const { productMedia, setProductMedia } = useStateContext();
  const close = (e) => {
    if (e.target.classList.contains("backdrop"))
      setProductMedia((prev) => {
        return { ...prev, isOpen: false };
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-center w-full h-screen bg-[#00000088] backdrop"
      onClick={(e) => close(e)}
    >
      <motion.div
        layoutId={productMedia.hash}
        className="flex justify-center object-cover "
      >
        <img src={productMedia.url} alt="" className="object-cover" />
      </motion.div>
    </motion.div>
  );
}

export default ProductMediaModal;
