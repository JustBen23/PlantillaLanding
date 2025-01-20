import { motion } from "framer-motion";

const animaciones = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const AnimacionDePagina = ({ children }) => {
  return (
    <>
      <motion.main
        variants={animaciones}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: .25 }}
      >
        {children}
      </motion.main>
    </>
  );
};
