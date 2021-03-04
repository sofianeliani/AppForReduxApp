import React from "react";


const Stats = () => {

  return (
    <div>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Stats users</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Ayez une vision sur le trafic de l'application en temps réel et les bonus qu'elle vous apporte
                </p>
                <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </div>
        <div>
            <span class="block text-2xl font-bold">153</span>
            <span class="block text-gray-500">Utilisateurs</span>
        </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        </div>
        <div>
            <span class="inline-block text-2xl font-bold">8</span>
            <span class="inline-block text-xl text-gray-500 font-semibold">%</span>
            <span class="block text-gray-500">Bonus dépensés</span>
        </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
        </div>
        <div>
            <span class="inline-block text-2xl font-bold">1</span>
            <span class="inline-block text-xl text-gray-500 font-semibold">%</span>
            <span class="block text-gray-500">Bonus abandonnés</span>
        </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </div>
        <div>
            <span class="inline-block text-2xl font-bold">83</span>
            <span class="inline-block text-xl text-gray-500 font-semibold">%</span>
            <span class="block text-gray-500">Transactions terminés</span>
        </div>
        </div>
    </section>
    </div>
  );
};

export default Stats;