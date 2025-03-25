import React, { useState, useCallback, useEffect } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-xl shadow-xl">
        Проверка Tailwind
      </div>

      <div className="flex justify-between w-full max-w-md mb-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-zinc-800 text-white dark:bg-white dark:text-black rounded"
        >
          {darkMode ? "Светлая тема" : "Тёмная тема"}
        </button>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Открыть модальное окно
      </button>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="large"
        bg="bg-yellow-100"
        darkBg="dark:bg-yellow-800"
        title="Моя кастомная модалка"
        showCloseButton={true}
      >
        <p>Теперь можно менять цвет фона и скрывать кнопку закрытия.</p>
      </Modal>
    </div>
  );
}

export default App;
