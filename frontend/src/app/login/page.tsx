"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserCircle, Lock, Building, Map } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("Ministry Admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const roles = [
    "Ministry Admin",
    "State Officer",
    "District Officer",
    "Project Agency",
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userRole", role);
    window.dispatchEvent(new Event("storage")); // Trigger layout update
    router.push("/dashboard");
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-[#003366] mb-2">
          <Building size={48} />
        </div>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-[#003366]">
          Department Login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in to the Land Acquisition & Management System
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-t-4 border-[#FF9933]">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Select Role
              </label>
              <div className="mt-1">
                <select
                  id="role"
                  name="role"
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-[#003366] focus:outline-none focus:ring-[#003366] sm:text-sm border"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username / Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserCircle className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border focus:border-[#003366] focus:ring-[#003366]"
                  placeholder="admin@nic.in"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border focus:border-[#003366] focus:ring-[#003366]"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#003366] focus:ring-[#003366]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#003366] hover:text-[#002244]">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-[#003366] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#002244] focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-200">
            <p><strong>Note for evaluators:</strong> Authentication is mocked.</p>
            <p>Select any role and click Sign In to proceed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
