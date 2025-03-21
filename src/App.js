import React, { useState } from "react";
import Modal from "./Modal";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Открыть модальное окно
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="large">
        <h2 className="text-xl font-bold">Большая модалка!</h2>
        <p className="mt-2">Теперь поддерживаются разные размеры.</p>
      </Modal>

    </div>
  );
}

export default App;
