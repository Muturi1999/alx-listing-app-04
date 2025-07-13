// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-center p-4 mt-8">
//       <p>&copy; 2025 StayFinder. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-pink-500 mb-4">🏠 StayScape</h3>
            <p className="text-gray-400">Find your perfect accommodation worldwide.</p>
          </div>
          {/* Add other footer sections */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;