import React, { useState } from 'react';
import { 
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { 
  FaDownload, 
  FaChartPie, 
  FaChartBar, 
  FaUserFriends, 
  FaCalendarAlt,
  FaFilePdf
} from 'react-icons/fa';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for charts
const categoryData = {
  labels: ['Hygiene', 'Tech', 'Food', 'Clothing', 'Other'],
  datasets: [
    {
      label: 'Packed',
      data: [3, 2, 2, 5, 1],
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
    },
    {
      label: 'Pending',
      data: [1, 1, 3, 2, 2],
      backgroundColor: 'rgba(251, 191, 36, 0.8)',
    },
    {
      label: 'Delivered',
      data: [0, 1, 0, 1, 1],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
    }
  ],
};

const userContributionData = {
  labels: ['Sarah Wilson', 'Michael Brown', 'Emma Davis'],
  datasets: [
    {
      label: 'Items Packed',
      data: [10, 5, 3],
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
      ],
      borderColor: [
        'rgba(99, 102, 241, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(16, 185, 129, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const packingProgressData = {
  labels: ['Jul 1', 'Jul 3', 'Jul 5', 'Jul 7', 'Jul 9', 'Jul 11', 'Jul 13'],
  datasets: [
    {
      label: 'Items Packed',
      data: [0, 3, 8, 12, 15, 18, 22],
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
    }
  ],
};

// Options for charts
const categoryOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom', // Removed "as const"
    },
    title: {
      display: true,
      text: 'Items by Category',
      font: {
        size: 16,
      }
    },
  },
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
      beginAtZero: true,
    },
  },
};

const userContributionOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom', // Removed "as const"
    },
    title: {
      display: true,
      text: 'Contribution by Member',
      font: {
        size: 16,
      }
    },
  },
};

const packingProgressOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom', // Removed "as const"
    },
    title: {
      display: true,
      text: 'Packing Progress Over Time',
      font: {
        size: 16,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const AnalyticsPage = () => {
  const [reportPeriod, setReportPeriod] = useState('7days');
  
  const totalItems = 22;
  const itemsPacked = 18;
  const packingProgress = Math.round((itemsPacked / totalItems) * 100);
  
  const generatePDF = () => {
    // This would use jsPDF to generate a PDF report
    alert('Generating PDF report...');
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header eventName="Summer Camping Trip" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Analytics & Reports</h1>
              <p className="text-gray-500">Track progress and contributions</p>
            </div>
            
            <div className="flex space-x-3 items-center">
              <select
                value={reportPeriod}
                onChange={(e) => setReportPeriod(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="all">All Time</option>
              </select>
              
              <button 
                onClick={generatePDF}
                className="btn-primary flex items-center"
              >
                <FaFilePdf className="mr-2" />
                Download Report
              </button>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary-100 text-primary-600 mr-4">
                  <FaChartPie size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Packing Progress</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-800">{packingProgress}%</p>
                    <p className="ml-2 text-sm text-gray-500">complete</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div 
                  className="bg-primary-600 h-2.5 rounded-full" 
                  style={{ width: `${packingProgress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <FaChartBar size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Total Items</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-800">{totalItems}</p>
                    <p className="ml-2 text-sm text-gray-500">items</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="bg-green-50 p-2 rounded-lg text-center">
                  <p className="text-xs text-gray-500">Packed</p>
                  <p className="text-lg font-semibold text-green-600">{itemsPacked}</p>
                </div>
                <div className="bg-yellow-50 p-2 rounded-lg text-center">
                  <p className="text-xs text-gray-500">Pending</p>
                  <p className="text-lg font-semibold text-yellow-600">{totalItems - itemsPacked - 3}</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg text-center">
                  <p className="text-xs text-gray-500">Delivered</p>
                  <p className="text-lg font-semibold text-blue-600">3</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                  <FaUserFriends size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Total Members</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-800">3</p>
                    <p className="ml-2 text-sm text-gray-500">participants</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Most Active</p>
                  <p className="text-sm font-medium text-gray-800">Sarah</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Owner</p>
                  <p className="text-sm font-medium text-gray-800">You</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Last Joined</p>
                  <p className="text-sm font-medium text-gray-800">Emma</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                  <FaCalendarAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Trip Timeline</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-bold text-gray-800">9</p>
                    <p className="ml-2 text-sm text-gray-500">days remaining</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-xs text-gray-500">Start Date</p>
                  <p className="text-sm font-semibold text-gray-800">Jul 15, 2023</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">End Date</p>
                  <p className="text-sm font-semibold text-gray-800">Jul 22, 2023</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <Bar options={categoryOptions} data={categoryData} height={300} />
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-center">
                <div style={{ maxWidth: '350px' }}>
                  <Pie options={userContributionOptions} data={userContributionData} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <Bar options={packingProgressOptions} data={packingProgressData} height={300} />
          </div>
          
          {/* Additional Analytics */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Individual Performance</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Member
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Items Assigned
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Items Packed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completion Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Activity
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                          S
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Sarah Wilson</div>
                          <div className="text-sm text-gray-500">Admin</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      12
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      10
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2 text-sm font-medium text-green-600">83%</div>
                        <div className="w-full h-2 bg-gray-200 rounded-full max-w-[100px]">
                          <div className="h-2 bg-green-500 rounded-full" style={{ width: '83%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Today, 2:30 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                          M
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Michael Brown</div>
                          <div className="text-sm text-gray-500">Member</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      7
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2 text-sm font-medium text-yellow-600">71%</div>
                        <div className="w-full h-2 bg-gray-200 rounded-full max-w-[100px]">
                          <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '71%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Yesterday, 4:15 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                          E
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Emma Davis</div>
                          <div className="text-sm text-gray-500">Member</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2 text-sm font-medium text-green-600">100%</div>
                        <div className="w-full h-2 bg-gray-200 rounded-full max-w-[100px]">
                          <div className="h-2 bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3 days ago
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnalyticsPage;