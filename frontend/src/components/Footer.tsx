export default function Footer() {
  return (
    <footer className="bg-[#002244] text-white py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-gray-600 pb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">LandSaathi</h2>
            <p className="text-xs text-gray-400 mt-1">National Land Acquisition & Management System</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm font-medium">
            <a href="#" className="hover:text-[#FF9933] transition-colors">About</a>
            <a href="#" className="hover:text-[#FF9933] transition-colors">Contact</a>
            <a href="#" className="hover:text-[#FF9933] transition-colors">Accessibility Statement</a>
            <a href="#" className="hover:text-[#FF9933] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FF9933] transition-colors">Privacy Policy</a>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ministry of Rural Development, Government of India. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Prototype built for SIH26016</p>
        </div>
      </div>
    </footer>
  );
}
