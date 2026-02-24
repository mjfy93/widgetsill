import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 p-4 rounded-xl">
        {/* Custom title bar (since we removed the default one) */}
        <div className="flex justify-between items-center mb-4 drag-region">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            WidgetSill
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:opacity-80 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Placeholder for widgets */}
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            📅 Calendar Widget (coming soon)
          </div>
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            🌤️ Weather Widget (coming soon)
          </div>
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
            🎵 Media Controls (coming soon)
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
          Platform: {window.electronAPI?.platform ?? 'browser'}
        </p>
      </div>
    </div>
  )
}

export default App