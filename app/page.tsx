"use client";

export default function Dashboard() {
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM12.232 4.023a4.52 4.52 0 011.69 1.492A4.52 4.52 0 0115 6a4.52 4.52 0 011.078-2.485C16.598 2.65 17 2.193 17 2v.001C17 1.838 17 1.667 17 1.5c0-.828-.672-1.5-1.5-1.5-.828 0-1.5.672-1.5 1.5-.001.076-.002.15-.003.224A.5.5 0 0013.25 1a.5.5 0 00-.001.001C12.83 1.25 12.44 1.705 12.232 2.213a.5.5 0 00-.001.001L10.5 5.5a.5.5 0 00.5.5h2c.276 0 .5-.224.5-.5V3a.5.5 0 00-.5-.5H12a.5.5 0 00-.5-.5zM15 14a3 3 0 11-6 0 3 3 0 016 0zM18.232 12.023a4.52 4.52 0 011.69 1.492A4.52 4.52 0 0121 14a4.52 4.52 0 011.078-2.485C22.598 10.65 23 10.193 23 10v.001C23 9.838 23 9.667 23 9.5c0-.828-.672-1.5-1.5-1.5-.828 0-1.5.672-1.5 1.5-.001.076-.002.15-.003.224A.5.5 0 0021.25 9a.5.5 0 00-.001.001C20.83 9.25 20.44 9.705 20.232 10.213a.5.5 0 00-.001.001L18.5 13.5a.5.5 0 00.5.5h2c.276 0 .5-.224.5-.5V11a.5.5 0 00-.5-.5H20a.5.5 0 00-.5-.5zM6 14a3 3 0 11-6 0 3 3 0 016 0zM9.232 12.023a4.52 4.52 0 011.69 1.492A4.52 4.52 0 0112 14a4.52 4.52 0 011.078-2.485C13.598 10.65 14 10.193 14 10v.001C14 9.838 14 9.667 14 9.5c0-.828-.672-1.5-1.5-1.5-.828 0-1.5.672-1.5 1.5-.001.076-.002.15-.003.224A.5.5 0 0011.25 9a.5.5 0 00-.001.001C10.83 9.25 10.44 9.705 10.232 10.213a.5.5 0 00-.001.001L8.5 13.5a.5.5 0 00.5.5h2c.276 0 .5-.224.5-.5V11a.5.5 0 00-.5-.5H11a.5.5 0 00-.5-.5z"></path></svg>
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM4 6h12a.5.5 0 01.5.5v2.5H3.5V6.5a.5.5 0 01.5-.5zM4 10.5h12V14a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5v-3.5zM14 11a1 1 0 100-2 1 1 0 000 2z"></path></svg>
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
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 100-2 1 1 0 000 2zm2 0a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
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
}
