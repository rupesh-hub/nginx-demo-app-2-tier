import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Reach out to us using the details below.
      </p>

      {/* Contact Info */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4 max-w-md">
        <div className="flex items-center space-x-3">
          <Mail size={24} className="text-gray-600" />
          <p className="text-gray-700">contact@example.com</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone size={24} className="text-gray-600" />
          <p className="text-gray-700">+1 234 567 890</p>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin size={24} className="text-gray-600" />
          <p className="text-gray-700">123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}
