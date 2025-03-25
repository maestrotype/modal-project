import React, { useEffect } from "react";
import { motion } from "framer-motion";

const modalVariants = {
  small: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1, scale: 1, transition: { duration: 0.3 }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  },
  medium: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, y: 0, transition: { duration: 0.3 }
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } }
  },
  large: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1, y: 0, transition: { duration: 0.3 }
    },
    exit: { opacity: 0, y: 100, transition: { duration: 0.2 } }
  }
};

const sizeClasses = {
  small: "max-w-xs",
  medium: "max-w-md",
  large: "max-w-lg"
};

const Modal = ({
  isOpen,
  onClose,
  children,
  size = "medium",
  bg = "bg-white",
  darkBg = "dark:bg-gray-800",
  title,
  showCloseButton = true
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target.id === "modal-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <motion.div
        variants={modalVariants[size]}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`${bg} ${darkBg} p-6 rounded-xl shadow-xl ${sizeClasses[size]}`}
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
  );
};

export default Modal;
