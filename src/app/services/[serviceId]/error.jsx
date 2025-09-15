"use client";
import Link from "next/link";
import { IoArrowBack, IoRefreshOutline } from "react-icons/io5";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen bg-[#000319] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-4">Something went wrong!</h1>
        <p className="text-gray-400 mb-6">
          We encountered an error while loading the service details. Please try again.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all"
          >
            <IoRefreshOutline className="w-5 h-5" />
            Try Again
          </button>
          
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center gap-2 border border-orange-500 text-orange-400 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all"
          >
            <IoArrowBack />
            Back to Services
          </Link>
        </div>
        
        {error?.message && (
          <details className="mt-6 text-left">
            <summary className="text-gray-400 text-sm cursor-pointer hover:text-gray-300">
              Error details
            </summary>
            <p className="text-red-400 text-xs mt-2 bg-red-500/10 p-3 rounded border border-red-500/20">
              {error.message}
            </p>
          </details>
        )}
      </div>
    </div>
  );
};

export default Error;
