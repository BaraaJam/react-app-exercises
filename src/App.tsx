function App() {
    return (
        <main className="min-h-screen bg-gray-100 p-8 flex justify-center items-start">
            <div className="bg-white rounded-xl shadow-md p-6 max-w-sm">
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                    Welcome to My React App
                </h1>
                <p className="text-gray-600 mb-4 text-sm">
                    This is my first React application built with Vite and TypeScript.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
                    Click Me
                </button>
            </div>
        </main>
    )
}

export default App