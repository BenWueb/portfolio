import NavbarMobile from "./NavbarMobile";
import { motion } from "framer-motion";

function Navbar() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <NavbarMobile />
    </>
  );
}
export default Navbar;
