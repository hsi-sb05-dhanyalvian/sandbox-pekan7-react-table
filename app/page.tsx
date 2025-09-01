//- app/page.tsx

"use client";

import React from "react";
import { DollarSign, UserCheck, Users } from "lucide-react";

const PageDashboard = () => {
  const iconSize = 24;
  
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="space-y-4">
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-500 rounded-full p-2">
                      <Users size={iconSize} />
                    </div>
                    <span className="text-sm font-medium text-gray-500">Total Users</span>
                  </div>
                  <span className="text-green-500 text-sm font-semibold">+1.2%</span>
                </div>
                <p className="mt-4 text-4xl font-bold text-gray-900">12,345</p>
                <p className="mt-1 text-sm text-gray-400">Since last month</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 text-purple-500 rounded-full p-2">
                      <DollarSign size={iconSize} />
                    </div>
                    <span className="text-sm font-medium text-gray-500">Revenue</span>
                  </div>
                  <span className="text-red-500 text-sm font-semibold">-0.5%</span>
                </div>
                <p className="mt-4 text-4xl font-bold text-gray-900">$56,789</p>
                <p className="mt-1 text-sm text-gray-400">Since last month</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 text-green-500 rounded-full p-2">
                      <UserCheck size={iconSize} />
                    </div>
                    <span className="text-sm font-medium text-gray-500">New Sign-ups</span>
                  </div>
                  <span className="text-green-500 text-sm font-semibold">+3.4%</span>
                </div>
                <p className="mt-4 text-4xl font-bold text-gray-900">456</p>
                <p className="mt-1 text-sm text-gray-400">Since last week</p>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-medium mb-4">Recent Transactions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#TRX12345</td>
                      <td className="px-6 py-4 whitespace-nowrap">$150.00</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                      <td className="px-6 py-4 whitespace-nowrap">2023-10-25</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#TRX12346</td>
                      <td className="px-6 py-4 whitespace-nowrap">$240.50</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                      <td className="px-6 py-4 whitespace-nowrap">2023-10-24</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#TRX12347</td>
                      <td className="px-6 py-4 whitespace-nowrap">$99.99</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Failed</span></td>
                      <td className="px-6 py-4 whitespace-nowrap">2023-10-23</td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#TRX12348</td>
                      <td className="px-6 py-4 whitespace-nowrap">$500.00</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                      <td className="px-6 py-4 whitespace-nowrap">2023-10-22</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#TRX12349</td>
                      <td className="px-6 py-4 whitespace-nowrap">$75.00</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                      <td className="px-6 py-4 whitespace-nowrap">2023-10-21</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#TRX12350</td>
                      <td className="px-6 py-4 whitespace-nowrap">$1,200.00</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                      <td className="px-6 py-4 whitespace-nowrap">2023-10-20</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#TRX12351</td>
                      <td className="px-6 py-4 whitespace-nowrap">$32.50</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                      <td className="px-6 py-4 whitespace-nowrap">2023-10-19</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">#TRX12352</td>
                      <td className="px-6 py-4 whitespace-nowrap">$88.88</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Failed</span></td>
                      <td className="px-6 py-4 whitespace-nowrap">2023-10-18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PageDashboard;
