import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Mau Castro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Portfolio Frontend
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Vite
            </span>
            <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Tailwind
            </span>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-8">
            <p className="text-white text-lg mb-4">
              ¡Contador de prueba!
            </p>
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contador: {count}
            </button>
          </div>

          <div className="text-gray-600">
            <p className="mb-4">
              Edita <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.tsx</code> para empezar a construir tu portfolio
            </p>
            <p className="text-sm">
              ✨ Tailwind CSS está configurado y listo para usar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
