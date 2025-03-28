# modal-lib

A customizable modal component for React with smooth animations and Tailwind CSS styling.

## ✨ Features

- 🎨 Fully styleable with Tailwind CSS
- 🎯 Supports custom size (`small`, `medium`, `large`)
- 🌗 Dark mode support
- 🎬 Smooth entrance and exit animations with Framer Motion
- 🧩 Optional title and close button
- 💡 Easy to integrate

## 🚀 Installation

```bash
npm install modal-lib
```

## 📦 Usage

```jsx
import Modal from 'modal-lib'
import 'modal-lib/index.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My custom modal"
        showCloseButton={true}
        size="large"
        bg="bg-white"
        darkBg="dark:bg-gray-800"
      >
        <p>This is the modal content.</p>
      </Modal>
    </>
  )
}
```

## ⚙️ Props

| Prop            | Type      | Default   | Description                                      |
|-----------------|-----------|-----------|--------------------------------------------------|
| `isOpen`        | `boolean` | `false`   | Controls modal visibility                        |
| `onClose`       | `func`    | —         | Callback when modal closes                       |
| `children`      | `node`    | —         | Content inside the modal                         |
| `title`         | `string`  | —         | Optional title text                              |
| `showCloseButton` | `boolean` | `true`  | Whether to show the close button                 |
| `size`          | `string`  | `'large'` | Modal size: `'small'`, `'medium'`, `'large'`     |
| `bg`            | `string`  | —         | Background color class (e.g. `bg-white`)         |
| `darkBg`        | `string`  | —         | Background color for dark mode (e.g. `dark:bg-gray-800`) |

## 🧪 Development

```bash
npm run dev
```

## 📝 License

MIT
