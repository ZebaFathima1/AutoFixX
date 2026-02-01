// AutoFixXLogo.tsx
import React from "react";

import { motion } from "framer-motion";
const AutoFixXLogo = () => (
  <motion.img
    src="/autofixx-logo.png"
    alt="AutoFixX Logo"
    className="h-16 w-auto mx-auto drop-shadow-xl"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  />
);

export default AutoFixXLogo;
