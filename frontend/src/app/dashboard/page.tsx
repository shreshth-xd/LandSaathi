"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { proposals } from "@/data/proposals";
import { FileText, Map, Banknote, Users, Clock, ArrowRight } from "lucide-react";

export default function Dashboard() {
  const [role, setRole] = useState("Guest");

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) setRole(storedRole);
  }, []);

  // Filter logic based on role (mock)
  const filteredProposals = proposals.filter((p) => {
    if (role === "District Officer") return p.district.includes("Jhansi"); // mock
    if (role === "State Officer") return p.district.includes("Uttar Pradesh") || p.district.includes("Maharashtra"); // mock
    return true; // Ministry Admin and Project Agency see all for this demo
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-bold text-[#003366]">Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">Overview of Land Acquisition Projects</p>
        </div>
        <div className="bg-blue-50 text-[#003366] px-4 py-2 rounded font-semibold text-sm border border-blue-100">
          Viewing as: {role}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-[#003366] flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Total Area</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">286.2 <span className="text-sm font-normal text-gray-500">ha</span></h3>
            </div>
            <div className="bg-blue-100 p-2 rounded text-[#003366]">
              <Map size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold mt-4">Across 4 projects</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-green-600 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Compensation</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">₹146.3 <span className="text-sm font-normal text-gray-500">Cr</span></h3>
            </div>
            <div className="bg-green-100 p-2 rounded text-green-700">
              <Banknote size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 font-semibold mt-4">64% of total allocated</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-[#FF9933] flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Families Rehab</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">222 <span className="text-sm font-normal text-gray-500">HHs</span></h3>
            </div>
            <div className="bg-orange-100 p-2 rounded text-orange-700">
              <Users size={20} />
            </div>
          </div>
          <p className="text-xs text-orange-600 font-semibold mt-4">51% eligible enrolled</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-red-600 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Timeline Adherence</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">75%</h3>
            </div>
            <div className="bg-red-100 p-2 rounded text-red-700">
              <Clock size={20} />
            </div>
          </div>
          <p className="text-xs text-red-600 font-semibold mt-4">1 project delayed</p>
        </div>
      </div>

      {/* Proposals Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <h3 className="text-lg font-bold text-[#003366] flex items-center">
            <FileText size={18} className="mr-2" /> Active Proposals
          </h3>
          <button className="text-sm bg-[#003366] text-white px-3 py-1.5 rounded hover:bg-[#002244] transition">
            + New Proposal
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                  Project ID & Name
                </th>
                <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                  Current Stage
                </th>
                <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider">
                  Submission Date
                </th>
                <th scope="col" className="px-6 py-3 text-right font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProposals.map((proposal) => (
                <tr key={proposal.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-[#003366]">{proposal.id}</div>
                    <div className="text-gray-500 max-w-[250px] truncate" title={proposal.projectName}>
                      {proposal.projectName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {proposal.district}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      proposal.isDelayed ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {proposal.currentStage}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {new Date(proposal.submissionDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/proposals/${proposal.id}`}
                      className="text-[#003366] hover:text-[#FF9933] flex items-center justify-end"
                    >
                      View Details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </td>
                </tr>
              ))}
              {filteredProposals.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No proposals found for your role in the selected region.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
