// AutoFixXLogo.tsx
import React from "react";

import { motion } from "framer-motion";
const AutoFixXLogo = ({ className = "h-6 w-6" }: { className?: string }) => (
  <motion.img
    src="/autofixx-logo.png"
    alt="AutoFixX Logo"
    className={`${className} drop-shadow-xl`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  />
);

export default AutoFixXLogo;
