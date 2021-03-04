import React from "react";


const Cards = () => {

  return (
    <div>
      <div>
        <div class="flex bg-gray-100">

        <div class="flex-grow text-gray-800"> 
          <div class="p-6 sm:p-10 space-y-6">


            <section class="flex">
              <div class="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg mr-8">
                <div class="w-full flex md:flex-col bg-gradient-to-br from-yellow-500 to-yellow-700">
                  <div class="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                    <h2 class="text-xl font-semibold mb-2 text-shadow">Card example</h2>
                    <p class="font-medium text-violet-100 text-shadow mb-4">Learn how to get Tailwind set up in your project.</p>
                    <a class="mt-auto text-card bg-red-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex" href="/docs/installation">Button</a>
                  </div>
                </div>
              </div>
              <div class="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg mr-8">
                <div class="w-full flex md:flex-col bg-gradient-to-br from-red-500 to-red-800">
                  <div class="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                    <h2 class="text-xl font-semibold mb-2 text-shadow">Card example</h2>
                    <p class="font-medium text-violet-100 text-shadow mb-4">Learn how to get Tailwind set up in your project.</p>
                    <a class="mt-auto text-card bg-pink-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex" href="/docs/installation">Button</a>
                  </div>
                </div>
              </div>
              <div class="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg mr-8">
                <div class="w-full flex md:flex-col bg-gradient-to-br from-pink-500 to-pink-800">
                  <div class="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                    <h2 class="text-xl font-semibold mb-2 text-shadow">Card example</h2>
                    <p class="font-medium text-violet-100 text-shadow mb-4">Learn how to get Tailwind set up in your project.</p>
                    <a class="mt-auto text-card bg-blue-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex" href="/docs/installation">Button</a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;