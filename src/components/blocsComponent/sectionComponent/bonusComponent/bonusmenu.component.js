import React from "react";

import UserList from '../bonusComponent/userlist.component';

const BonusMenu = () => {


  return (
<div>
    <div class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
    <UserList/>
      <div class="flex-grow overflow-hidden h-full flex flex-col">
        <div class="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
          <div class="flex h-full text-gray-600 dark:text-gray-400">
            <a href="#" class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Tous les bonus</a>
            <a href="#" class="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Mes bonus</a>
            <a href="#" class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Mon deposit</a>
            <a href="#" class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center">Mes échanges</a>
          </div>
          <div class="ml-auto flex items-center space-x-7">
            <button class="h-8 px-3 rounded-md shadow text-white bg-blue-500">Deposit</button>

            <button class="flex items-center">
              <span class="relative flex-shrink-0">
                <img class="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
                <span class="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
              </span>
              <span class="ml-2">user profil</span>
              <svg viewBox="0 0 24 24" class="w-4 ml-1 flex-shrink-0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex-grow flex overflow-x-hidden">
          <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
            <div class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
              <div class="flex w-full items-center">
                <div class="flex items-center text-3xl text-gray-900 dark:text-white">
                  <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" class="w-12 mr-4 rounded-full" alt="profile" />
                  Grace Simmons 
                </div>
                <div class="ml-auto sm:flex hidden items-center justify-end">
                  <div class="text-right">
                    <div class="text-xs text-gray-400 dark:text-gray-400">Budget :</div>
                    <div class="text-gray-900 text-lg dark:text-white">500€</div>
                  </div>
                  <button class="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                    <svg viewBox="0 0 24 24" class="w-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center space-x-3 sm:mt-7 mt-4">
                <a href="#" class="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Activity</a>
                <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5">Transfer</a>
                <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Budgets</a>
                <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Notifications</a>
                <a href="#" class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Other</a>
              </div>
            </div>
            <div class="sm:p-7 p-4">
              <div class="flex w-full items-center mb-7">
                <button class="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                  <svg viewBox="0 0 24 24" class="w-4 mr-2 text-gray-400 dark:text-gray-600" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Last 30 days
                  <svg viewBox="0 0 24 24" class="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <button class="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                  Filter by
                  <svg viewBox="0 0 24 24" class="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                  <span class="mr-3">Page 2 of 4</span>
                  <button class="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                    <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                    <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              <table class="w-full text-left">
                <thead>
                  <tr class="text-gray-400">
                    <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Plateform</th>
                    <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Bonus</th>
                    <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">Description</th>
                    <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Difficulté</th>
                    <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400">Récupère ton bonus</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 dark:text-gray-100">
                  <tr>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4 mr-5 text-yellow-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Jeux en ligne
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        500 €
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">High</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <div class="sm:flex hidden flex-col">
                          24.12.2020
                          <div class="text-gray-400 text-xs">11:16 AM</div>
                        </div>
                        <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                          <svg viewBox="0 0 24 24" class="w-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4 mr-5 text-yellow-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Jeux en ligne
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        500 €
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">High</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <div class="sm:flex hidden flex-col">
                          24.12.2020
                          <div class="text-gray-400 text-xs">11:16 AM</div>
                        </div>
                        <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                          <svg viewBox="0 0 24 24" class="w-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4 mr-5 text-yellow-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Jeux en ligne
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        500 €
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">High</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <div class="sm:flex hidden flex-col">
                          24.12.2020
                          <div class="text-gray-400 text-xs">11:16 AM</div>
                        </div>
                        <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                          <svg viewBox="0 0 24 24" class="w-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4 mr-5 text-yellow-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Jeux en ligne
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        500 €
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">High</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <div class="sm:flex hidden flex-col">
                          24.12.2020
                          <div class="text-gray-400 text-xs">11:16 AM</div>
                        </div>
                        <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                          <svg viewBox="0 0 24 24" class="w-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4 mr-5 text-yellow-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Jeux en ligne
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        500 €
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">High</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <div class="sm:flex hidden flex-col">
                          24.12.2020
                          <div class="text-gray-400 text-xs">11:16 AM</div>
                        </div>
                        <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                          <svg viewBox="0 0 24 24" class="w-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4 mr-5 text-yellow-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Jeux en ligne
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        500 €
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">High</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <div class="sm:flex hidden flex-col">
                          24.12.2020
                          <div class="text-gray-400 text-xs">11:16 AM</div>
                        </div>
                        <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                          <svg viewBox="0 0 24 24" class="w-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4 mr-5 text-yellow-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Jeux en ligne
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        500 €
                      </div>
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">Subscription renewal</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">High</td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      <div class="flex items-center">
                        <div class="sm:flex hidden flex-col">
                          24.12.2020
                          <div class="text-gray-400 text-xs">11:16 AM</div>
                        </div>
                        <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                          <svg viewBox="0 0 24 24" class="w-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
              <div class="flex w-full mt-5 space-x-2 justify-end">
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                  <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">1</button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">2</button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">3</button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">4</button>
                <button class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none">
                  <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BonusMenu;