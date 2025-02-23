import React from 'react';

const Error = () => {
  return (
    <div className='pt-5 w-full h-screen overflow-hidden'>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img 
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
            alt="404 error" 
            src={`/404image.avif`}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              404 - Page Not Found
            </h1>
            <p className="mb-8 leading-relaxed">
              Sorry, the page you are looking for doesn’t exist. It might have been moved or deleted.
            </p>
            <div className="flex justify-center">
              <button 
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => window.location.href = '/'}
              >
                Go to Homepage
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;