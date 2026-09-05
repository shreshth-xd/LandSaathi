"use client";

import { proposals } from "@/data/proposals";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import { AlertCircle } from "lucide-react";

export default function AnalyticsDashboard() {
  const delayedProposals = proposals.filter(p => p.isDelayed);

  // Mock data for compensation disbursed over time
  const compensationData = [
    { month: 'Jan', amount: 12.5 },
    { month: 'Feb', amount: 18.2 },
    { month: 'Mar', amount: 35.4 },
    { month: 'Apr', amount: 42.1 },
    { month: 'May', amount: 68.3 },
    { month: 'Jun', amount: 84.7 },
    { month: 'Jul', amount: 110.2 },
    { month: 'Aug', amount: 146.3 },
  ];

  // Mock data for timeline adherence
  const timelineData = [
    { name: 'On Time', value: 3, color: '#16a34a' },
    { name: 'Delayed', value: 1, color: '#dc2626' },
  ];

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-[#003366]">Analytics & Reports</h2>
        <p className="text-sm text-gray-500 mt-1">System-wide metrics and performance tracking</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Compensation Disbursed */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-[#003366] mb-6">Cumulative Compensation Disbursed (Cr)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={compensationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="amount" stroke="#FF9933" strokeWidth={3} dot={{ r: 4, fill: "#003366" }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Timeline Adherence */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-[#003366] mb-6">Project Timeline Adherence</h3>
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={timelineData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                >
                  {timelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Delayed Proposals List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-red-50 flex items-center">
          <AlertCircle size={20} className="text-red-600 mr-2" />
          <h3 className="text-lg font-bold text-red-800">Flagged: Delayed Proposals</h3>
        </div>
        <div className="p-0">
          {delayedProposals.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase">Project</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase">Current Stage</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-600 uppercase">Days Exceeded</th>
                  <th className="px-6 py-3 text-right font-semibold text-gray-600 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {delayedProposals.map(p => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-bold text-[#003366]">{p.id}</div>
                      <div className="text-gray-500">{p.projectName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">{p.currentStage}</span>
                    </td>
                    <td className="px-6 py-4 text-red-600 font-medium">
                      +14 days
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[#003366] hover:underline font-medium text-sm">Escalate</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-6 text-center text-gray-500">No delayed proposals found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
