import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8
                    bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl w-full text-center">
        <div className="space-y-6">
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold 
                         text-blue-600 dark:text-blue-400">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold 
                         text-gray-800 dark:text-white text-balance">
            ¡Oops! Página no encontrada
          </h2>

          <p className="text-base sm:text-lg 
                        text-gray-600 dark:text-gray-300 
                        max-w-md mx-auto text-pretty">
            Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center
                         px-6 py-3 text-base font-medium
                         text-gray-700 dark:text-white
                         bg-white dark:bg-gray-800
                         border border-gray-300 dark:border-gray-700
                         rounded-lg
                         hover:bg-gray-100 dark:hover:bg-gray-700
                         transition-colors duration-200
                         w-full sm:w-auto"
            >
                <IoArrowBackOutline className="w-5 h-5 mr-2"  />
             
              Ir atrás
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
