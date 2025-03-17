import React from "react";
import { motion } from "framer-motion";

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2, ease: "easeIn" } }
};

const sizeClasses = {
    small: "max-w-xs",
    medium: "max-w-md",
    large: "max-w-lg"
};

const Modal = ({ isOpen, onClose, children, size = "large" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full ${sizeClasses[size]} relative`}
            >
                <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white" onClick={onClose}>✖</button>
                {children}
            </motion.div>
        </div>
    );
};

export default Modal;
