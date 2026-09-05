"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { proposals, stages } from "@/data/proposals";
import { ArrowLeft, CheckCircle2, Circle, FileText, Download, Clock } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import map to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

export default function ProposalDetail() {
  const params = useParams();
  const router = useRouter();
  const proposalId = params.id as string;
  const proposal = proposals.find(p => p.id === proposalId);
  const [activeTab, setActiveTab] = useState("overview");

  if (!proposal) {
    return <div className="p-8 text-center text-red-600">Proposal not found</div>;
  }

  const currentStageIndex = stages.indexOf(proposal.currentStage);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => router.back()}
          className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition"
        >
          <ArrowLeft size={20} className="text-[#003366]" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-[#003366]">{proposal.id}</h2>
          <p className="text-sm text-gray-600">{proposal.projectName}</p>
        </div>
        <div className="ml-auto flex space-x-2">
           <button className="bg-white border border-[#003366] text-[#003366] px-4 py-2 rounded text-sm font-semibold hover:bg-gray-50">
             Print Report
           </button>
           <button className="bg-[#003366] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#002244]">
             Update Stage
           </button>
        </div>
      </div>

      {/* Stage Tracker */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <div className="flex items-center min-w-max">
          {stages.map((stage, idx) => {
            const isCompleted = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex;
            return (
              <div key={stage} className="flex items-center">
                <div className="flex flex-col items-center relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                    isCompleted ? "bg-green-500 text-white" : 
                    isCurrent ? "bg-[#FF9933] text-white ring-4 ring-orange-100" : 
                    "bg-gray-200 text-gray-400"
                  }`}>
                    {isCompleted ? <CheckCircle2 size={16} /> : <Circle size={10} fill="currentColor" />}
                  </div>
                  <p className={`text-xs mt-2 w-24 text-center ${isCurrent ? 'font-bold text-[#003366]' : 'text-gray-500'}`}>
                    {stage}
                  </p>
                </div>
                {idx < stages.length - 1 && (
                  <div className={`w-16 h-1 -mt-6 mx-2 ${idx < currentStageIndex ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          {['overview', 'map', 'documents', 'compensation'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-semibold capitalize ${
                activeTab === tab 
                  ? "border-b-2 border-[#FF9933] text-[#003366]" 
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab === 'compensation' ? 'Compensation & R&R' : tab === 'map' ? 'GIS Map' : tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#003366] mb-4 border-b pb-2">Project Metadata</h3>
                <dl className="space-y-3 text-sm">
                  <div className="grid grid-cols-3"><dt className="text-gray-500 font-medium">Project Name</dt><dd className="col-span-2 font-semibold text-gray-900">{proposal.projectName}</dd></div>
                  <div className="grid grid-cols-3"><dt className="text-gray-500 font-medium">Requiring Body</dt><dd className="col-span-2 font-semibold text-gray-900">{proposal.requiringBody}</dd></div>
                  <div className="grid grid-cols-3"><dt className="text-gray-500 font-medium">District/State</dt><dd className="col-span-2 font-semibold text-gray-900">{proposal.district}</dd></div>
                  <div className="grid grid-cols-3"><dt className="text-gray-500 font-medium">Submission Date</dt><dd className="col-span-2 font-semibold text-gray-900">{new Date(proposal.submissionDate).toLocaleDateString()}</dd></div>
                  <div className="grid grid-cols-3"><dt className="text-gray-500 font-medium">Current Status</dt><dd className="col-span-2 font-semibold text-[#FF9933]">{proposal.currentStage}</dd></div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#003366] mb-4 border-b pb-2">Impact Summary</h3>
                <dl className="space-y-3 text-sm">
                  <div className="grid grid-cols-3"><dt className="text-gray-500 font-medium">Land Area</dt><dd className="col-span-2 font-semibold text-gray-900">{proposal.landArea}</dd></div>
                  <div className="grid grid-cols-3"><dt className="text-gray-500 font-medium">Affected HHs</dt><dd className="col-span-2 font-semibold text-gray-900">{proposal.householdsAffected}</dd></div>
                </dl>
              </div>
            </div>
          )}

          {activeTab === 'map' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#003366]">Geospatial Tagging</h3>
                <div className="flex space-x-4 text-xs font-medium">
                  <div className="flex items-center"><span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span> Possession Taken</div>
                  <div className="flex items-center"><span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span> Pending</div>
                </div>
              </div>
              <MapComponent stage={proposal.currentStage} />
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h3 className="text-lg font-bold text-[#003366] mb-4">Document Repository</h3>
              <div className="border border-gray-200 rounded overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-600">Document Name</th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-600">Version</th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-600">Uploaded By</th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-600">Date</th>
                      <th className="px-4 py-2 text-right font-semibold text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 flex items-center font-medium"><FileText size={16} className="text-blue-500 mr-2"/> Initial Proposal Draft</td>
                      <td className="px-4 py-3 text-gray-500">v1.0</td>
                      <td className="px-4 py-3 text-gray-500">NHAI Nodal Officer</td>
                      <td className="px-4 py-3 text-gray-500">15 Jan 2026</td>
                      <td className="px-4 py-3 text-right"><button className="text-[#003366] hover:text-[#FF9933]"><Download size={18}/></button></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 flex items-center font-medium"><FileText size={16} className="text-blue-500 mr-2"/> SIA Report Approved</td>
                      <td className="px-4 py-3 text-gray-500">v1.2</td>
                      <td className="px-4 py-3 text-gray-500">District Magistrate, Jhansi</td>
                      <td className="px-4 py-3 text-gray-500">22 Mar 2026</td>
                      <td className="px-4 py-3 text-right"><button className="text-[#003366] hover:text-[#FF9933]"><Download size={18}/></button></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 flex items-center font-medium"><FileText size={16} className="text-blue-500 mr-2"/> Sec 11 Notification</td>
                      <td className="px-4 py-3 text-gray-500">v1.0</td>
                      <td className="px-4 py-3 text-gray-500">Revenue Dept, UP</td>
                      <td className="px-4 py-3 text-gray-500">10 Apr 2026</td>
                      <td className="px-4 py-3 text-right"><button className="text-[#003366] hover:text-[#FF9933]"><Download size={18}/></button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'compensation' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[#003366] mb-4">Financial Disbursement</h3>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Total Award Amount</span>
                    <span className="font-bold">{proposal.compensation.total}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">Amount Disbursed</span>
                    <span className="font-bold text-green-600">{proposal.compensation.disbursed}</span>
                  </div>
                  
                  <div className="mb-1 flex justify-between text-xs text-gray-500">
                    <span>{proposal.compensation.familiesPaid} of {proposal.compensation.totalFamilies} families paid</span>
                    <span>{Math.round((proposal.compensation.familiesPaid / proposal.compensation.totalFamilies) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(proposal.compensation.familiesPaid / proposal.compensation.totalFamilies) * 100}%` }}></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-[#003366] mb-4">Rehabilitation & Resettlement</h3>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">Eligible Households</span>
                    <span className="font-bold">{proposal.rr.eligible}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">Households Enrolled/Completed</span>
                    <span className="font-bold text-[#FF9933]">{proposal.rr.enrolled}</span>
                  </div>
                  
                  <div className="mb-1 flex justify-between text-xs text-gray-500">
                    <span>Progress</span>
                    <span>{Math.round((proposal.rr.enrolled / proposal.rr.eligible) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#FF9933] h-2.5 rounded-full" style={{ width: `${(proposal.rr.enrolled / proposal.rr.eligible) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
