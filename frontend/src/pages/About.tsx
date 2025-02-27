import { Info, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-4">About Us</h1>
      <p className="text-gray-700 mb-6">
        We are committed to providing the best services and information to our users. Here’s what we stand for:
      </p>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Mission Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <Target size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">Our Mission</h2>
          <p className="text-gray-700 text-sm">
            To deliver high-quality content and services that add value to our users.
          </p>
        </div>

        {/* Team Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <Users size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">Our Team</h2>
          <p className="text-gray-700 text-sm">
            A group of passionate individuals working together to achieve excellence.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <Info size={40} className="text-gray-600 mb-4" />
          <h2 className="text-lg font-medium">More Info</h2>
          <p className="text-gray-700 text-sm">
            We continuously evolve and improve to serve you better.
          </p>
        </div>
      </div>
    </div>
  );
}
