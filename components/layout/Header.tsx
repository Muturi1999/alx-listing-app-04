// const Header = () => {
//   return (
//     <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
//       <div className="text-2xl font-bold">StayFinder</div>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="border rounded px-4 py-2 mt-2 md:mt-0 md:ml-4 w-full md:w-1/3"
//       />
//       <nav className="flex gap-4 mt-2 md:mt-0">
//         <a href="#">Rooms</a>
//         <a href="#">Mansion</a>
//         <a href="#">Countryside</a>
//         <a href="#">Sign In</a>
//         <a href="#">Sign Up</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-pink-500">🏠 StayScape</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Rooms</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Mansion</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Countryside</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-500 font-medium">Sign In</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;