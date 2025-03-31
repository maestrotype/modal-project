import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2, ease: "easeIn" } },
};

const sizeClasses = {
  small: "max-w-xs",
  medium: "max-w-md",
  large: "max-w-lg",
};

const Modal = ({
  isOpen,
  onClose,
  children,
  size = "large",
  bg = "bg-white",
  darkBg = "dark:bg-gray-800",
  title,
  showCloseButton = true,
}) => {
  if (!isOpen) return null;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") onClose?.();
  };

  const handleOverlayClick = (event) => {
    if (event.target.id === "modal-overlay") onClose?.();
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
      onClick={handleOverlayClick}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`modal-container ${bg} ${darkBg} ${sizeClasses[size]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
          >
            ✕
          </button>
        )}
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        {children}
      </motion.div>
    </div>
  ),
    modalRoot
};

export default Modal;
